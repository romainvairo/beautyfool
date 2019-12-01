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

  render() {
    const { language, user, deleteAction, setAdminUser } = this.props;

    return <UserActionsView
      translations={translations[language]}
      deleteAction={deleteAction}
      setAdminUser={setAdminUser}
      user={user}
    />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserActionsContainer);
