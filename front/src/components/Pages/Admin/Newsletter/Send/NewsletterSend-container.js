import React from 'react';
import { connect } from 'react-redux';

import NewsletterSendView from './NewsletterSend-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const NewsletterSendContainer = ({ language }) => <NewsletterSendView translations={translations[language]} />;

export default connect(mapStateToProps)(NewsletterSendContainer);
