import React from 'react';
import { connect } from 'react-redux';

import BenefitsGetOneView from './BenefitsGetOne-view';
import translations from './translations';
import axios from '../../../../../axios';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class BenefitsGetOneContainer extends React.PureComponent {

  state = {
    service: {},
  }

  componentDidMount() {
    const { id } = this.props;

    axios.get('/api/services/' + id)
      .then(({ data }) => {
        if (data.success) {
          this.setState({ service: data.data });
        }
      })
      .catch(console.error);
  }

  render() {
    const { language } = this.props;
    const { service } = this.state;

    return <BenefitsGetOneView translations={translations[language]} service={service} />;
  }
}

export default connect(mapStateToProps)(BenefitsGetOneContainer);
