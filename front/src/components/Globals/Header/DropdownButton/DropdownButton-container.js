import React from 'react';
import { connect } from 'react-redux';

import DropdownButtonView from './DropdownButton-view';
import translations from './translations';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});

// Create the function DropdownContainer that render the view
const DropdownButtonContainer = ({ language, onClick }) => <DropdownButtonView
translations={translations[language]}
onClick={onClick}
 />;

export default connect(mapStateToProps, null)(DropdownButtonContainer);
