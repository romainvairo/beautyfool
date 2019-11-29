import React from 'react';
import { connect } from 'react-redux';

import GalleryGetOneView from './GalleryGetOne-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const GalleryGetOneContainer = ({ language }) => <GalleryGetOneView translations={translations[language]} />;

export default connect(mapStateToProps)(GalleryGetOneContainer);
