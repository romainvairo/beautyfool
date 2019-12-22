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
    beautyTips: [],
    count: 0,
  }

  componentDidMount(){
   this.getCount();
   this.getBeautyTips();
  }

  componentDidUpdate(prevProps) {
    // faut tester que la page courrante est differente de la page precedante
    if(this.getPage() !== this.getPage(prevProps)) {
      this.getBeautyTips();
    }
  }

  getBeautyTips() {
    axios.get(`/api/beauty-tips/page/${this.getPage()}`)
      .then(({ data }) => {
        this.setState({ beautyTips: data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * @param {Object} [props]
   * @returns {Number}
   */
  getPage(props) {
    // the end parameter is always defined and will be used as a default value
    const { match } = props || this.props;
    return +match.params.page || 1;
  }

  getCount = () => {
    axios.get(`/api/beauty-tips/count`)
      .then(({ data }) => {
        this.setState({ count: data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { language } = this.props;
    const { beautyTips, count } = this.state;

    return <BeautyTipsView
      translations={translations[language]}
      beautyTips={beautyTips}
      lastPage={Math.ceil(count / 10)}
      page={this.getPage()}
    />;
  }
}

export default connect(mapStateToProps)(BeautyTipsContainer);
