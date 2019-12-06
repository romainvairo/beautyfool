import React from 'react';
import { connect } from 'react-redux';
import { throttle } from 'lodash';

import axios from '../../../../../axios';
import UsersGetAllView from './UsersGetAll-view';
import { RequestSnackbar } from '../../../../../services';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class UsersGetAllContainer extends React.PureComponent {

  deleteSnackbar = new RequestSnackbar(this);
  getSnackbar = new RequestSnackbar(this);
  getting = false;
  page = this.props.page;
  maxY = 0;

  state = {
    users: [],
  };

  componentDidMount() {
    this.setGetRequest();
    this.callGetRequest();
    this.setDeleteRequest();

    window.addEventListener('scroll', throttle(this.scroll, 100));
  }

  componentDidUpdate(prevProps) {
    const { page } = this.props;

    if (page !== prevProps.page) {
      this.page = page;
      this.setState({ users: [] });
      this.callGetRequest();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', throttle(this.scroll, 100));
  }

  /**
   * set the request to `this.getSnackbar`
   */
  setGetRequest = () => {
    const { language } = this.props;

    this.getSnackbar
      .setText(translations[language].snackbar.get)
      .setRequest(() => axios.get('/api/users/page/' + this.page++))
      .then(({ data }) => {
        // update the list
        this.setState(state => ({ users: state.users.concat(data.data) }));
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        this.getting = false;
      });
  }

  /**
   * call the get request
   */
  callGetRequest = () => {
    this.getting = true;
    this.getSnackbar.call();
  }

  /**
   * set the request to `this.deleteSnackbar`
   */
  setDeleteRequest = () => {
    const { language } = this.props;

    this.deleteSnackbar
      .setText(translations[language].snackbar.delete)
      .setRequest(user => axios.delete('/api/users/' + user._id + '/delete'))
      .then((_, user) => {
        // delete the user from the state
        this.deleteUserById(user._id);
      })
      .catch(err => {
        console.error(err);
      });
  }

  /**
   * call the get request
   * @param {{_id: String}} user
   */
  callDeleteRequest = user => () => {
    this.deleteSnackbar.call(user);
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
      this.callGetRequest();
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

  render() {
    const { users } = this.state;

    return <UsersGetAllView
      users={users}
      DeleteSnackbar={this.deleteSnackbar.Snackbar}
      GetSnackbar={this.getSnackbar.Snackbar}
      callDeleteRequest={this.callDeleteRequest}
    />;
  }
}

export default connect(mapStateToProps)(UsersGetAllContainer);
