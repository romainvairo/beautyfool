import React from 'react';
import { connect } from 'react-redux';

import FeedbacksEditView from './FeedbacksEdit-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const FeedbacksEditContainer = ({ language }) => <FeedbacksEditView translations={translations[language]} />;

export default connect(mapStateToProps)(FeedbacksEditContainer);
