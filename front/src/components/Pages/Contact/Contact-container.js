import React from 'react';
import { connect } from 'react-redux';

import ContactView from './Contact-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const ContactContainer = ({ language }) =>
  <ContactView translations={translations[language]} />;

export default connect(mapStateToProps)(ContactContainer);
