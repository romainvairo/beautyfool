import React from 'react';
import { connect } from 'react-redux';

import CommentsGetAllView from './CommentsGetAll-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const CommentsGetAllContainer = ({ language }) => <CommentsGetAllView translations={translations[language]} />;

export default connect(mapStateToProps)(CommentsGetAllContainer);
