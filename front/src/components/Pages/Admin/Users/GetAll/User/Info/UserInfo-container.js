import React from 'react';
import { connect } from 'react-redux';

import UserInfoView from './UserInfo-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const UserInfoContainer = ({ language, user }) => <UserInfoView
  translations={translations[language]}
  user={user}
/>;

export default connect(mapStateToProps)(UserInfoContainer);
