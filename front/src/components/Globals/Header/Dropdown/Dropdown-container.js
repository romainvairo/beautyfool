import React from 'react';
import { connect } from 'react-redux';

import DropdownView from './Dropdown-view';
import translations from './translations';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});

<<<<<<< HEAD
// Create the function DropdownContainer that render the view
=======
// Create the function HeaderContainer that render the view
>>>>>>> romain
const DropdownContainer = ({ language }) => <DropdownView translations={translations[language]} />;

export default connect(mapStateToProps, null)(DropdownContainer);
