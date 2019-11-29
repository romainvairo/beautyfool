import React from 'react';
import { connect } from 'react-redux';

import UsersEditView from './UsersEdit-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const UsersEditContainer = ({ language }) => <UsersEditView translations={translations[language]} />;

export default connect(mapStateToProps)(UsersEditContainer);
