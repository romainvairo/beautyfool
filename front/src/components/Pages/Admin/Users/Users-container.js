import React from 'react';
import { connect } from 'react-redux';

import { getPage } from '../../../../utils';
import UsersView from './Users-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const UsersContainer = ({ language, match }) => <UsersView page={getPage(match)} translations={translations[language]} />;

export default connect(mapStateToProps)(UsersContainer);
