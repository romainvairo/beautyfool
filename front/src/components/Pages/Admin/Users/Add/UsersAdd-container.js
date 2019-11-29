import React from 'react';
import { connect } from 'react-redux';

import UsersAddView from './UsersAdd-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const UsersAddContainer = ({ language }) => <UsersAddView translations={translations[language]} />;

export default connect(mapStateToProps)(UsersAddContainer);
