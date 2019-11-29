import React from 'react';
import { connect } from 'react-redux';

import FeedbacksGetAllView from './FeedbacksGetAll-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const FeedbacksGetAllContainer = ({ language }) => <FeedbacksGetAllView translations={translations[language]} />;

export default connect(mapStateToProps)(FeedbacksGetAllContainer);
