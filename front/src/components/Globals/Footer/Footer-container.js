import React from 'react';
import { connect } from 'react-redux';

import FooterView from './Footer-view';
import translations from './translations';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});

// Create the function FooterContainer that render the view
const FooterContainer = ({ language }) => <FooterView translations={translations[language]} />;

export default connect(mapStateToProps, null)(FooterContainer);