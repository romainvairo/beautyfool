import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import UsersGetAllView from './UsersGetAll-view';
import { RequestSnackbar } from '../../../../../services';
import { GetSnackbar, DeleteSnackbar } from './Snackbars';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class UsersGetAllContainer extends React.PureComponent {

  deleteSnackbar = new DeleteSnackbar(this);
  getSnackbar = new GetSnackbar(this);
  getting = false;

  state = {
    users: [],
  };

  componentDidMount() {
    this.getSnackbar.caller(this.props.page, 'bottom');
  }

  componentDidUpdate(prevProps) {
    const { page } = this.props;

    if (page !== prevProps.page) {
      this.setState({ users: [] });
      this.getSnackbar.caller(page);
    }
  }

  /**
   * called when the user scrolls
   */
  onScroll = (page, type) => {
    if (this.getting) {
      return true;
    }

    this.getSnackbar.caller(page, type);
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
    const { lastPage, page } = this.props;

    return <UsersGetAllView
      users={users}
      DeleteSnackbar={this.deleteSnackbar.Snackbar}
      GetSnackbar={this.getSnackbar.Snackbar}
      callDeleteRequest={this.deleteSnackbar.caller}
      onScroll={this.onScroll}
      page={page}
      lastPage={lastPage}
    />;
  }
}

export default connect(mapStateToProps)(UsersGetAllContainer);
