import React from 'react';
import { connect } from 'react-redux';

import CommentsEditView from './CommentsEdit-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const CommentsEditContainer = ({ language }) => <CommentsEditView translations={translations[language]} />;

export default connect(mapStateToProps)(CommentsEditContainer);
