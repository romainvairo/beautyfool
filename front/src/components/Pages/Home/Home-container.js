import React from 'react';
import { connect } from 'react-redux';

import HomeView from './Home-view';
import translations from './translations';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});

// Create the function HomeContainer that render the view
const HomeContainer = ({ language }) => <HomeView translations={translations[language]} />;

export default connect(mapStateToProps, null)(HomeContainer);