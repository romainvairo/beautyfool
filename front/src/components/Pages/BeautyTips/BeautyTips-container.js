import React from 'react';
import { connect } from 'react-redux';
import axios from '../../../axios';

import BeautyTipsView from './BeautyTips-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class BeautyTipsContainer extends React.PureComponent {
  state = {
    beautyTips: []
  }

  componentDidMount(){
    axios.get('/api/beauty-tips/page/1')
      .then(({ data }) => {
      this.setState({ beautyTips: data.data });
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    const { language } = this.props;
    const { beautyTips } = this.state;

    return <BeautyTipsView
      translations={translations[language]}
      beautyTips={beautyTips}
    />;
  }
}

export default connect(mapStateToProps)(BeautyTipsContainer);
