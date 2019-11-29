import React from 'react';
import { connect } from 'react-redux';

import CommentsGetOneView from './CommentsGetOne-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const CommentsGetOneContainer = ({ language }) => <CommentsGetOneView translations={translations[language]} />;

export default connect(mapStateToProps)(CommentsGetOneContainer);
