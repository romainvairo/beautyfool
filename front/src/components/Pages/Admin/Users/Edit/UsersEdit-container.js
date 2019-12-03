import React from 'react';
import { connect } from 'react-redux';

import UsersEditView from './UsersEdit-view';
import translations from './translations';
import axios from '../../../../../axios';
import { RequestSnackbar } from '../../../../../services';
import { setAdminUser } from '../../../../../store/actions/admin';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
  user: state.adminReducer.user,
});

const mapDispatchToProps = dispatch => ({
  setAdminUser: value => dispatch(setAdminUser(value)),
});

class UsersEditContainer extends React.PureComponent {

  getSnackbar = new RequestSnackbar(this);
  editSnackbar = new RequestSnackbar(this);

  componentDidMount() {
    this.setGetRequest();
    this.callGetRequest();
  }

  /**
   * set the request to `this.getSnackbar`
   */
  setGetRequest = () => {
    const { language, match, setAdminUser } = this.props;

    this.getSnackbar
      .setText(translations[language].snackbar.get)
      .setRequest(() => axios.get('/api/users/' + match.params.id))
      .then(({ data }) => {
        console.log(data)
        setAdminUser(data.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  /**
   * call the get request
   */
  callGetRequest = () => {
    const { user, match } = this.props;

    if (user._id !== match.params.id) {
      this.getSnackbar.call();
    }
  }

  render() {
    const { language, user } = this.props;

    return <UsersEditView
      translations={translations[language]}
      GetSnackbar={this.getSnackbar.Snackbar}
      user={user}
    />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersEditContainer);
