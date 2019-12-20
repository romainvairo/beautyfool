import React from 'react';
import { connect } from 'react-redux';

import LoginView from './Login-view';
import translations from './translations';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});

const LoginContainer = ({ language, history }) => <LoginView
  translations={translations[language]}
  history={history}
/>;

export default connect(mapStateToProps, null)(LoginContainer);
