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
    benefits: []
  }

  componentDidMount() {
    axios.get('/api/services/page/1')
      .then(({ data }) => {
        this.setState({ benefits: data.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { language } = this.props;
    const { benefits } = this.state;

    return <BenefitsView
      translations={translations[language]}
      benefits={benefits}
    />;

  }
}

export default connect(mapStateToProps, null)(BenefitsContainer);
