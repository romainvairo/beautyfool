import React from 'react';
import { connect } from 'react-redux';

import EditProfileView from './EditProfile-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const EditProfileContainer = ({ language }) =>
  <EditProfileView translations={translations[language]} />;

export default connect(mapStateToProps)(EditProfileContainer);
