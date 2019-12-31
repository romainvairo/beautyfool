import React from 'react';
import { connect } from 'react-redux';

import AdminButtonView from './AdminButton-view';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const AdminButtonContainer = () => <AdminButtonView />;

export default connect(mapStateToProps)(AdminButtonContainer);
