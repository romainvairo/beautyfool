import React from 'react';
import { connect } from 'react-redux';

import FeedbacksCarouselView from './FeedbacksCarousel-view';
import { images } from './data';

import translations from './translations';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});


const FeedbacksCarouselContainer = ({ language }) => <FeedbacksCarouselView images={images} translations={translations[language]} />;

export default connect(mapStateToProps, null)(FeedbacksCarouselContainer);
