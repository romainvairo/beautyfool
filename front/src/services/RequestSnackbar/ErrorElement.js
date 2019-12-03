import React from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const ErrorElement = ({ language, message, onClick }) => (
  <>
    {message}
    <Button onClick={onClick} className="ml-2 text-white font-bold">{translations[language].retryButton}</Button>
  </>
);

export default connect(mapStateToProps)(ErrorElement);
