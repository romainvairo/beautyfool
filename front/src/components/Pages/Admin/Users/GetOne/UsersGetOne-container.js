import React from 'react';
import { connect } from 'react-redux';

import UsersGetOneView from './UsersGetOne-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const UsersGetOneContainer = ({ language }) => <UsersGetOneView translations={translations[language]} />;

export default connect(mapStateToProps)(UsersGetOneContainer);
