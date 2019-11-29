import React from 'react';
import { connect } from 'react-redux';

import GalleryEditView from './GalleryEdit-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const GalleryEditContainer = ({ language }) => <GalleryEditView translations={translations[language]} />;

export default connect(mapStateToProps)(GalleryEditContainer);
