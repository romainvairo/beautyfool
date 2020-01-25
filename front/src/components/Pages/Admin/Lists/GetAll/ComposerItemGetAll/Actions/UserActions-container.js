import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import UserActionsView from './UserActions-view';
import translations from './translations';
import { setAdminData } from '../../../../../../../store/actions/admin';

const mapStateToProps = state => ({
  language: state.clientReducer.language
});

const mapDispatchToProps = dispatch => ({
  setAdminData: value => dispatch(setAdminData(value)),
});

class UserActionsContainer extends React.PureComponent {

  state = {
    redirection: '',
  }

  editAction = item => () => {
    const { setAdminData, match } = this.props;
    const { category } = match.params;
    setAdminData(item);
    this.setState({ redirection: `/admin/${category}/${item._id}/edit` });
  }

  render() {
    const { language, item, callDeleteRequest } = this.props;
    const { redirection } = this.state;
    return <UserActionsView
      translations={translations[language]}
      callDeleteRequest={callDeleteRequest}
      editAction={this.editAction}
      item={item}
      redirection={redirection}
    />;
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserActionsContainer));
