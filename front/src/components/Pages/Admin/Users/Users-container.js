import React from 'react';
import { connect } from 'react-redux';

import UsersView from './Users-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const UsersContainer = ({ language }) => <UsersView translations={translations[language]} />;

export default connect(mapStateToProps)(UsersContainer);
