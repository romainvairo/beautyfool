import React from 'react';
import { connect } from 'react-redux';

import GalleryGetAllView from './GalleryGetAll-view';
import translations from './translations';
import axios from '../../../../../axios';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class GalleryGetAllContainer extends React.PureComponent {

  state = {
    gallery: [],
  }

  componentDidMount() {
    axios.get('/api/gallery')
      .then(({ data }) => {
        if (data.success) {
          this.setState({ gallery: data.data });
        }
      })
      .catch(console.error);
  }

  render() {
    const { language } = this.props;
    const { gallery } = this.state;

    return <GalleryGetAllView translations={translations[language]} gallery={gallery} />;
  }
}

export default connect(mapStateToProps)(GalleryGetAllContainer);
