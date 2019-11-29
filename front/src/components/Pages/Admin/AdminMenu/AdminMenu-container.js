import React from 'react';
import { connect } from 'react-redux';

import AdminMenuView from './AdminMenu-view';
import translations from './translations';
import { menuData } from './data';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const AdminMenuContainer = ({ language }) =>
  <AdminMenuView translations={translations[language]} menuData={menuData} />;

export default connect(mapStateToProps)(AdminMenuContainer);
