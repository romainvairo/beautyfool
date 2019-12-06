import React from 'react';
import { connect } from 'react-redux';

import ChatboxButtonView from './ChatboxButton-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const ChatboxButtonContainer = ({ language, onClick }) => <ChatboxButtonView
  translations={translations[language]}
  onClick={onClick}
/>;

export default connect(mapStateToProps)(ChatboxButtonContainer);
