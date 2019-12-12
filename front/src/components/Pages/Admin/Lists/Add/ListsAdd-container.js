import React from 'react';
import { connect } from 'react-redux';

import ListsAddView from './ListsAdd-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const ListsAddContainer = ({ language }) => <ListsAddView translations={translations[language]} />;

export default connect(mapStateToProps)(ListsAddContainer);
