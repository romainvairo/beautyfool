import React from 'react';
import { connect } from 'react-redux';

import CommentsAddView from './CommentsAdd-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const CommentsAddContainer = ({ language }) => <CommentsAddView translations={translations[language]} />;

export default connect(mapStateToProps)(CommentsAddContainer);
