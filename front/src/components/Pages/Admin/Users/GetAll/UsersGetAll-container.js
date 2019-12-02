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
  maxY = 0;

  state = {
    users: [],
  };

  componentDidMount() {
    this.request(this.page);

    window.addEventListener('scroll', throttle(this.scroll, 100));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', throttle(this.scroll, 100));
  }


  /**
   * request to get the list
   * @param {Number} page
   */
  request = page => {
    const { language } = this.props;

    this.getting = true;
    this.getSnackbar.new(translations[language].snackbar.get);

    // get all users
    axios.get('/api/users/' + page)
      .then(({ data }) => {
        this.getSnackbar.status('success');
        // update the list
        this.setState(state => ({ users: state.users.concat(data.data) }));
        this.getting = false;
      })
      .catch(err => {
        this.getSnackbar.status('error');
        this.getting = false;
        console.error(err);
      });
  }

  /**
   * called when the user scrolls
   */
  scroll = () => {
    // avoid useless processing
    if (this.getting || window.scrollY <= this.maxY) {
      return;
    }

    this.maxY = window.scrollY;

    // get the element that contains the list
    const infiniteScrollContainer = document.getElementById('infinite-scroll');
    // get its height and top position
    const bounding = infiniteScrollContainer.getBoundingClientRect();
    // calculate the user's scroll position
    const thresold = (bounding.height + bounding.top) - window.innerHeight;

    // if the bottom of the user's scroll is less than 400 pixels
    // to the end of the list we perform a request to get more entries
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
      .then(() => {
        // change the snackbar to success
        this.deleteSnackbar.status('success');
        // delete the user from the state
        this.deleteUserById(user._id);
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
