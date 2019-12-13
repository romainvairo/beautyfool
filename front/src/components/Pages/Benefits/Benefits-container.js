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
    axios.get('/api/services/category/Ongles')
      .then(({ data }) => {
        this.setState({ nails: data.data });
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get('/api/services/category/Épilation')
    .then(({ data }) => {
      this.setState({ hairRemoval: data.data });
    })
    .catch((error) => {
      console.error(error);
    });

    axios.get('/api/services/category/Maquillage')
    .then(({ data }) => {
      this.setState({ makeup: data.data });
    })
    .catch((error) => {
      console.error(error);
    });

    axios.get('/api/services/category/Soins du visage')
    .then(({ data }) => {
      this.setState({ faceCare: data.data });
    })
    .catch((error) => {
      console.error(error);
    });

    axios.get('/api/services/category/Soins du corps')
    .then(({ data }) => {
      this.setState({ bodyCare: data.data });
    })
    .catch((error) => {
      console.error(error);
    });

    axios.get('/api/services/category/Soins des mains et des pieds')
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
