import React from 'react';
import { connect } from 'react-redux';

import SignupFormView from './SignupForm-view';
import translations from './translations';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});

// Create the function HomeContainer that render the view
const SignupFormContainer = ({ language }) => <SignupFormView translations={translations[language]} />;

export default connect(mapStateToProps, null)(SignupFormContainer);
