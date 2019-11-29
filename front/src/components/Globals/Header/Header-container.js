import React from 'react';
import { connect } from 'react-redux';

import HeaderView from './Header-view';
import translations from './translations';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});

// Create the function HeaderContainer that render the view
const HeaderContainer = ({ language }) => <HeaderView translations={translations[language]} />;

export default connect(mapStateToProps, null)(HeaderContainer);