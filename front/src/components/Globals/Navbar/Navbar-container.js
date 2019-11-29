import React from 'react';
import { connect } from 'react-redux';

import NavbarView from './Navbar-view';
import translations from './translations';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});

// Create the function NavbarContainer that render the view
const NavbarContainer = ({ language }) => <NavbarView translations={translations[language]} />;

export default connect(mapStateToProps, null)(NavbarContainer);