import React from 'react';
import { connect } from 'react-redux';

import UsersGetAllView from './UsersGetAll-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const UsersGetAllContainer = ({ language }) => <UsersGetAllView translations={translations[language]} />;

export default connect(mapStateToProps)(UsersGetAllContainer);
