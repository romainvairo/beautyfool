import React from 'react';
import { connect } from 'react-redux';

import GalleryGetOneView from './GalleryGetOne-view';
import translations from './translations';
import axios from '../../../../../axios';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class GalleryGetOneContainer extends React.PureComponent {

  state = {
    gallery: {},
  }

  componentDidMount() {
    const { id } = this.props;

    axios.get('/api/gallery/' + id)
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

    return <GalleryGetOneView translations={translations[language]} gallery={gallery} />;
  }
}

export default connect(mapStateToProps)(GalleryGetOneContainer);
