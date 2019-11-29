import React from 'react';
import { connect } from 'react-redux';

import GalleryAddView from './GalleryAdd-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

const GalleryAddContainer = ({ language }) => <GalleryAddView translations={translations[language]} />;

export default connect(mapStateToProps)(GalleryAddContainer);
