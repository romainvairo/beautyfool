import React from 'react';
import { connect } from 'react-redux';

import GalleryGetAllView from './GalleryGetAll-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const GalleryGetAllContainer = ({ language }) => <GalleryGetAllView translations={translations[language]} />;

export default connect(mapStateToProps)(GalleryGetAllContainer);
