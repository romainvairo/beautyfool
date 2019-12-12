import React from 'react';
import { connect } from 'react-redux';

import ListsEditView from './ListsEdit-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const ListsEditContainer = ({ language }) => <ListsEditView translations={translations[language]} />;

export default connect(mapStateToProps)(ListsEditContainer);
