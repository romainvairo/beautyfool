import React from 'react';
import { connect } from 'react-redux';

import UserActionsView from './UserActions-view';
import translations from './translations';
import { setAdminUser } from '../../../../../../../store/actions/admin';

const mapStateToProps = state => ({
  language: state.clientReducer.language
});

const mapDispatchToProps = dispatch => ({
  setAdminUser: value => dispatch(setAdminUser(value)),
});

class UserActionsContainer extends React.PureComponent {

  state = {
    redirection: '',
  }

  editAction = user => () => {
    const { setAdminUser } = this.props;
    setAdminUser(user);
    this.setState({ redirection: `/admin/users/${user._id}/edit` });
  }

  render() {
    const { language, user, callDeleteRequest } = this.props;
    const { redirection } = this.state;

    return <UserActionsView
      translations={translations[language]}
      callDeleteRequest={callDeleteRequest}
      editAction={this.editAction}
      user={user}
      redirection={redirection}
    />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserActionsContainer);
