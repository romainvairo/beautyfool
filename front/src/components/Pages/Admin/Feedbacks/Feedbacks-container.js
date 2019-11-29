import React from 'react';
import { connect } from 'react-redux';

import FeedbacksView from './Feedbacks-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const FeedbacksContainer = ({ language }) => <FeedbacksView translations={translations[language]} />;

export default connect(mapStateToProps)(FeedbacksContainer);
