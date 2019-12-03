import React from 'react';
import { connect } from 'react-redux';

import DropdownView from './Dropdown-view';
import translations from './translations';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});

// Create the function HeaderContainer that render the view
const DropdownContainer = ({ language }) => <DropdownView translations={translations[language]} />;

export default connect(mapStateToProps, null)(DropdownContainer);
