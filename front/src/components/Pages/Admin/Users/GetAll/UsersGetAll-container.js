import React from 'react';
import { connect } from 'react-redux';

import axios from '../../../../../axios';
import UsersGetAllView from './UsersGetAll-view';
import { MultiSnackbar } from '../../../../../services';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class UsersGetAllContainer extends React.PureComponent {

  snackbar = new MultiSnackbar(this);

  state = {
    users: [],
  };

  componentDidMount() {
    const { page } = this.props;

    // get all users
    axios.get('/api/users/' + page)
      .then(({ data }) => {
        if (data.success) {
          this.setState({ users: data.data });
        }
      })
      .catch(console.error);
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
    this.snackbar.new(translations[language].snackbar);

    // delete the user from the DB
    axios.delete('/api/users/' + user._id + '/delete')
      .then(({ data }) => {
        if (data.success) {
          // change the snackbar to success
          this.snackbar.status('success');
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
    this.snackbar.status('error');
  }

  render() {
    const { users } = this.state;

    return <UsersGetAllView
      users={users}
      Snackbar={this.snackbar.Snackbar}
      deleteAction={this.deleteAction}
    />;
  }
}

export default connect(mapStateToProps)(UsersGetAllContainer);
