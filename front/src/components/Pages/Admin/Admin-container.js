import React from 'react';
import { connect } from 'react-redux';

import AdminView from './Admin-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const AdminContainer = ({ language }) => <AdminView translations={translations[language]} />;

export default connect(mapStateToProps)(AdminContainer);
