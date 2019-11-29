import React from 'react';
import { connect } from 'react-redux';

import SignupView from './Signup-view';
import translations from './translations';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});

// Create the function HomeContainer that render the view
const SignupContainer = ({ language }) => <SignupView translations={translations[language]} />;

export default connect(mapStateToProps, null)(SignupContainer);
