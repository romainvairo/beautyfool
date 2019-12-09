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
    actuality: []
  }

  componentDidMount() {
    axios.get('/api/actualities/1')
      .then(({ data }) => {
        this.setState({ actuality: data.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { language } = this.props;
    const { actuality } = this.state;

    return <HomeView
      translations={translations[language]}
      actuality={actuality}
    />;

  }
}

export default connect(mapStateToProps, null)(HomeContainer);
