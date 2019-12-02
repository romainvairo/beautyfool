import React from 'react';
import { connect } from 'react-redux';

import ProfileEditView from './ProfileEdit-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const ProfileEditContainer = ({ language }) =>
  <ProfileEditView translations={translations[language]} />;

export default connect(mapStateToProps)(ProfileEditContainer);
