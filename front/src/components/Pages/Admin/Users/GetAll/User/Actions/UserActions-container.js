import React from 'react';
import { connect } from 'react-redux';

import UserActionsView from './UserActions-view';
import translations from './translations';
import { MultiSnackbar } from '../../../../../../../services';
import axios from '../../../../../../../axios';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class UserActionsContainer extends React.PureComponent {

  snackbar = new MultiSnackbar(this);

  render() {
    const { language, user, deleteAction } = this.props;

    return <UserActionsView
      translations={translations[language]}
      deleteAction={deleteAction}
      user={user}
    />;
  }
}

export default connect(mapStateToProps)(UserActionsContainer);
