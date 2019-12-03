import React from 'react';
import { connect } from 'react-redux';

import GalleryCarouselView from './GalleryCarousel-view';
import { images } from './data';

import translations from './translations';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});


const GalleryCarouselContainer = ({ language }) => <GalleryCarouselView images={images} translations={translations[language]} />;

export default connect(mapStateToProps, null)(GalleryCarouselContainer);
