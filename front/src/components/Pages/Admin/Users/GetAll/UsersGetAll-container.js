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

    axios.get('/api/users/' + page)
      .then(({ data }) => {
        if (data.success) {
          this.setState({ users: data.data });
        }
      })
      .catch(console.error);
  }

  deleteUserById = id => {
    this.setState(state => {
      const users = state.users.filter(u => u._id !== id);

      return { users };
    });
  }

  deleteAction = user => () => {
    const { language } = this.props;

    this.snackbar.new(translations[language].snackbar);

    axios.delete('/api/users/' + user._id + '/delete')
      .then(({ data }) => {
        if (data.success) {
          this.snackbar.status('success');
          this.deleteUserById(user._id);
        } else {
          this.error(data.error);
        }
      })
      .catch(this.error);
    /*setTimeout(() => {
      this.snackbar.status('success');
    }, 3000);*/
  }

  error = err => {
    console.error(err);
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
