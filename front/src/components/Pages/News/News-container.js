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
    news: [],
    count: 0,
  }

  componentDidMount() {
    this.getCount();
    this.getNews();
  }

  componentDidUpdate(prevProps) {
    if (this.getPage() !== this.getPage(prevProps)) {
      this.getCount();
      this.getNews();
    }
  }


  getPage(prop) {
    const { match } = prop || this.props;

    return +match.params.page || 1;
  }

  getCount = () => {
    axios.get('/api/actualities/count')
      .then(({ data }) => {
        if (data.success) {
          this.setState({ count: data.data });
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  getNews = () => {
    axios.get(`/api/actualities/page/${this.getPage()}`)
      .then(({ data }) => {
        this.setState({ news: data.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { language } = this.props;
    const { news, count } = this.state;

    return <NewsView
      translations={translations[language]}
      news={news}
      lastPage={Math.ceil(count / 10)}
      page={this.getPage()}
    />;
  }
}

export default connect(mapStateToProps)(NewsContainer);
