import React from 'react';
import { connect } from 'dynamic-redux';

import { translations } from './translations';
import LoadingView from './Loading-view';

const mapStateToProps = 'client: language';

const LoadingContainer = ({ language, name }) => (
  <LoadingView
    translations={translations[language || 'en']}
    name={name.toLowerCase()}
  />
);

LoadingContainer.defaultProps = {
  language: 'en',
};

export default connect(mapStateToProps)(LoadingContainer);
