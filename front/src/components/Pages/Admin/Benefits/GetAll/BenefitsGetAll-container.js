import React from 'react';
import { connect } from 'react-redux';

import BenefitsGetAllView from './BenefitsGetAll-view';
import translations from './translations';
import axios from '../../../../../axios';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class BenefitsGetAllContainer extends React.PureComponent {

  state = {
    services: [],
  };

  componentDidMount() {
    const { page } = this.props;

    axios.get('/api/services/' + page)
      .then(({ data }) => {
        if (data.success) {
          this.setState({ services: data.data });
        }
      })
      .catch(console.error);
  }

  render() {
    const { language } = this.props;
    const { services } = this.state;

    return <BenefitsGetAllView services={services} translations={translations[language]} />;
  }
}

export default connect(mapStateToProps)(BenefitsGetAllContainer);
