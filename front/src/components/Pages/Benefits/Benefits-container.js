import React from 'react';
import { connect } from 'react-redux';
import axios from '../../../axios';

import BenefitsView from './Benefits-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class BenefitsContainer extends React.PureComponent {

  state = {
    categories: []
  }

  componentDidMount() {
    axios.get('/api/categories')
      .then(({ data }) => {
        this.setState({ categories: data.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { language } = this.props;
    const { categories } = this.state;


    return <BenefitsView
      translations={translations[language]}
      categories={categories}
    />;

  }
}

export default connect(mapStateToProps, null)(BenefitsContainer);
