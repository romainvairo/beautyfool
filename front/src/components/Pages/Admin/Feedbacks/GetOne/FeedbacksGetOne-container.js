import React from 'react';
import { connect } from 'react-redux';

import FeedbacksGetOneView from './FeedbacksGetOne-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const FeedbacksGetOneContainer = ({ language }) => <FeedbacksGetOneView translations={translations[language]} />;

export default connect(mapStateToProps)(FeedbacksGetOneContainer);
