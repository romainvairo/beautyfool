import React from 'react';
import { connect } from 'react-redux';

import ActualitiesGetAllView from './ActualitiesGetAll-view';
import translations from './translations';
import axios from '../../../../../axios';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class ActualitiesGetAllContainer extends React.PureComponent {

  state = {
    actualities: [],
  };

  componentDidMount() {
    const { page } = this.props;

    axios.get('/api/actualities/' + page)
      .then(({ data }) => {
        if (data.success) {
          this.setState({ actualities: data.data });
        }
      })
      .catch(console.error);
  }

  render() {
    const { language } = this.props;
    const { actualities } = this.state;

    return <ActualitiesGetAllView actualities={actualities} translations={translations[language]} />;
  }
}

export default connect(mapStateToProps)(ActualitiesGetAllContainer);
