import React from 'react';
import { connect } from 'react-redux';

import { Auth } from '../../../../services/Auth';
import AdminButtonView from './AdminButton-view';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class AdminButtonContainer extends React.PureComponent {

  render(){
    return <AdminButtonView
    isAdmin={Auth.isAdmin()}/>;
  }
}
export default connect(mapStateToProps)(AdminButtonContainer);
