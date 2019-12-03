import React from 'react';
import { connect } from 'react-redux';

import GalleryCarouselView from './GalleryCarousel-view';
import translations from './translations';
import { images } from './data';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});

const GalleryCarouselContainer = ({ language }) => <GalleryCarouselView images={images} translations={translations[language]} />;

export default connect(mapStateToProps, null)(GalleryCarouselContainer);
