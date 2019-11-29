import React from 'react';
import { connect } from 'react-redux';

import BeautyTipsGetOneView from './BeautyTipsGetOne-view';
import translations from './translations';
import axios from '../../../../../axios';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class BeautyTipsGetOneContainer extends React.PureComponent {

  state = {
    beautyTip: {},
  }

  componentDidMount() {
    const { id } = this.props;

    axios.get('/api/beauty-tips/' + id)
      .then(({ data }) => {
        if (data.success) {
          this.setState({ beautyTip: data.data });
        }
      })
      .catch(console.error);
  }

  render() {
    const { language } = this.props;
    const { beautyTip } = this.state;

    return <BeautyTipsGetOneView translations={translations[language]} beautyTip={beautyTip} />;
  }
}

export default connect(mapStateToProps)(BeautyTipsGetOneContainer);
