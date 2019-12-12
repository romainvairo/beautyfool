import React from 'react';
import { connect } from 'react-redux';
import axios from '../../../axios';

import HomeView from './Home-view';
import translations from './translations';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});

class HomeContainer extends React.PureComponent {

  state = {
    actuality: [],
    beautyTip: []
  }

  componentDidMount() {
    axios.get('/api/actualities/newest')
      .then(({ data }) => {
        this.setState({ actuality: data.data });
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get('/api/beauty-tips/newest')
      .then(({ data }) => {
        this.setState({ beautyTip: data.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { language } = this.props;
    const { actuality } = this.state;
    const {beautyTip} = this.state;

    return <HomeView
      translations={translations[language]}
      actuality={actuality}
      beautyTip={beautyTip}
    />;

  }
}

export default connect(mapStateToProps, null)(HomeContainer);
