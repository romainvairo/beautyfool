import React from 'react';
import { connect } from 'react-redux';

import FeedbacksAddView from './FeedbacksAdd-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const FeedbacksAddContainer = ({ language }) => <FeedbacksAddView translations={translations[language]} />;

export default connect(mapStateToProps)(FeedbacksAddContainer);
