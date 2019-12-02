import React from 'react';
import { connect } from 'react-redux';

import BeautyTipsGetAllView from './BeautyTipsGetAll-view';
import translations from './translations';
import axios from '../../../../../axios';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class BeautyTipsGetAllContainer extends React.PureComponent {

  state = {
    beautyTips: [],
  };

  componentDidMount() {
    const { page } = this.props;

    axios.get('/api/beautyTips/' + page)
      .then(({ data }) => {
        if (data.success) {
          this.setState({ beautyTips: data.data });
        }
      })
      .catch(console.error);
  }

  render() {
    const { language } = this.props;
    const { beautyTips } = this.state;

    return <BeautyTipsGetAllView beautyTips={beautyTips} translations={translations[language]} />;
  }
}

export default connect(mapStateToProps)(BeautyTipsGetAllContainer);
