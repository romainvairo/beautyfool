import React from 'react';
import { connect } from 'react-redux';

import GalleryView from './Gallery-view';
import translations from './translations';
import { images } from './data';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const GalleryContainer = ({ language }) =>
  <GalleryView images={images} translations={translations[language]} />;

export default connect(mapStateToProps)(GalleryContainer);
