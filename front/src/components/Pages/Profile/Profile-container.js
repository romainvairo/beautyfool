import React from 'react';
import { connect } from 'react-redux';

import ProfileView from './Profile-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const ProfileContainer = ({ language }) =>
  <ProfileView translations={translations[language]} />;

export default connect(mapStateToProps)(ProfileContainer);
