import React from 'react';
import { connect } from 'react-redux';

import GalleryView from './Gallery-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const GalleryContainer = ({ language }) => <GalleryView translations={translations[language]} />;

export default connect(mapStateToProps)(GalleryContainer);
