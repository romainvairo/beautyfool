import React from 'react';
import { connect } from 'react-redux';

import CategoriesCarouselView from './CategoriesCarousel-view';
import { images } from './data';

import translations from './translations';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});


const CategoriesCarouselContainer = ({ language }) => <CategoriesCarouselView images={images} translations={translations[language]} />;

export default connect(mapStateToProps, null)(CategoriesCarouselContainer);
