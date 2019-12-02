import React from 'react';
import { connect } from 'react-redux';
import { throttle } from 'lodash';

import axios from '../../../../../axios';
import UsersGetAllView from './UsersGetAll-view';
import { MultiSnackbar } from '../../../../../services';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class UsersGetAllContainer extends React.PureComponent {

  deleteSnackbar = new MultiSnackbar(this);
  getSnackbar = new MultiSnackbar(this);
  getting = false;
  page = this.props.page;

  state = {
    users: [],
  };

  componentDidMount() {
    this.request(this.page);

    window.addEventListener('scroll', throttle(this.scroll, 100));
  }

  request = page => {
    const { language } = this.props;

    this.getting = true;
    this.getSnackbar.new(translations[language].snackbar.get);

    // get all users
    axios.get('/api/users/' + page)
      .then(({ data }) => {
        if (data.success) {
          setTimeout(() => {
            this.getSnackbar.status('success');
            this.setState(state => ({ users: state.users.concat(data.data) }));
            this.getting = false;
          }, 1500);
        }
      })
      .catch(err => {
        this.getting = false;
        console.error(err);
      });
  }

  scroll = () => {
    if (this.getting) {
      return;
    }

    const infiniteScrollContainer = document.getElementById('infinite-scroll');
    const bounding = infiniteScrollContainer.getBoundingClientRect();
    const thresold = (bounding.height + bounding.top) - window.innerHeight;

    if (thresold < 400) {
      this.request(++this.page);
    }
  }

  /**
   * @param {String} id
   */
  deleteUserById = id => {
    this.setState(state => {
      // delete a single user
      const users = state.users.filter(u => u._id !== id);

      // update the users in the state
      return { users };
    });
  }

  /**
   * @param {Object} user
   * @param {String} user._id
   */
  deleteAction = user => () => {
    const { language } = this.props;

    // start a new snackbar
    this.deleteSnackbar.new(translations[language].snackbar.delete);

    // delete the user from the DB
    axios.delete('/api/users/' + user._id + '/delete')
      .then(({ data }) => {
        if (data.success) {
          // change the snackbar to success
          this.deleteSnackbar.status('success');
          // delete the user from the state
          this.deleteUserById(user._id);
        } else {
          this.error(data.error);
        }
      })
      .catch(this.error);
  }

  /**
   * @param {String} err
   */
  error = err => {
    console.error(err);
    // change the snackbar to error
    this.deleteSnackbar.status('error');
  }

  render() {
    const { users } = this.state;

    return <UsersGetAllView
      users={users}
      DeleteSnackbar={this.deleteSnackbar.Snackbar}
      GetSnackbar={this.getSnackbar.Snackbar}
      deleteAction={this.deleteAction}
    />;
  }
}

export default connect(mapStateToProps)(UsersGetAllContainer);
