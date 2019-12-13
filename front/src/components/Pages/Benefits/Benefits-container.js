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
    nails: [],
    hairRemoval: [],
    makeup: [],
    faceCare: [],
    bodyCare: [],
    handsAndFeetCare: []
  }

  componentDidMount() {
    axios.get('/api/services/category/ongles')
      .then(({ data }) => {
        this.setState({ nails: data.data });
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get('/api/services/category/epilation')
    .then(({ data }) => {
      this.setState({ hairRemoval: data.data });
    })
    .catch((error) => {
      console.error(error);
    });

    axios.get('/api/services/category/maquillage')
    .then(({ data }) => {
      this.setState({ makeup: data.data });
    })
    .catch((error) => {
      console.error(error);
    });

    axios.get('/api/services/category/soins_du_visage')
    .then(({ data }) => {
      this.setState({ faceCare: data.data });
    })
    .catch((error) => {
      console.error(error);
    });

    axios.get('/api/services/category/soins_du_corps')
    .then(({ data }) => {
      this.setState({ bodyCare: data.data });
    })
    .catch((error) => {
      console.error(error);
    });

    axios.get('/api/services/category/soins_des_mains_et_des_pieds')
    .then(({ data }) => {
      this.setState({ handsAndFeetCare: data.data });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const { language } = this.props;
    const { nails } = this.state;
    const { hairRemoval } = this.state;
    const { makeup } = this.state;
    const { faceCare } = this.state;
    const { bodyCare } = this.state;
    const { handsAndFeetCare } = this.state;


    return <BenefitsView
      translations={translations[language]}
      nails={nails}
      hairRemoval={hairRemoval}
      makeup={makeup}
      faceCare={faceCare}
      bodyCare={bodyCare}
      handsAndFeetCare={handsAndFeetCare}
    />;

  }
}

export default connect(mapStateToProps, null)(BenefitsContainer);
