import React from 'react';
import { connect } from 'react-redux';

import ProfileCarouselView from './ProfileCarousel-view';
import translations from './translations';
import { images } from './data.js';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});

const ProfileCarouselContainer = ({ language }) => <ProfileCarouselView images={images} translations={translations[language]} />;

export default connect(mapStateToProps, null)(ProfileCarouselContainer);
