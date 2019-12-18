import React from 'react';
import { connect } from 'react-redux';
import axios from '../../../axios';

import NewsView from './News-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class NewsContainer extends React.PureComponent {

  state = {
    news: []
  }

  componentDidMount() {
    axios.get('/api/actualities/page/1')
      .then(({ data }) => {
        this.setState({ news: data.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { language } = this.props;
    const { news } = this.state;

    return <NewsView
      translations={translations[language]}
      news={news}
    />;

  }
}

export default connect(mapStateToProps)(NewsContainer);

