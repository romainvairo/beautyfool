import React from 'react';
import { connect } from 'react-redux';

import PageNotFoundView from './PageNotFound-view';
import translations from './translations';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});

// Create the function HomeContainer that render the view
const PageNotFoundContainer = ({ language }) => <PageNotFoundView translations={translations[language]} />;

export default connect(mapStateToProps, null)(PageNotFoundContainer);