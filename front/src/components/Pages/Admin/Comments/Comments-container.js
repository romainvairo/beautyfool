import React from 'react';
import { connect } from 'react-redux';

import CommentsView from './Comments-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const CommentsContainer = ({ language }) => <CommentsView translations={translations[language]} />;

export default connect(mapStateToProps)(CommentsContainer);
