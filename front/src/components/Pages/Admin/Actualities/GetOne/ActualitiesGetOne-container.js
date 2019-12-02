import React from 'react';
import { connect } from 'react-redux';

import ActualitiesGetOneView from './ActualitiesGetOne-view';
import translations from './translations';
import axios from '../../../../../axios';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class ActualitiesGetOneContainer extends React.PureComponent {

  state = {
    actuality: {},
  }

  componentDidMount() {
    const { id } = this.props;

    axios.get('/api/actualities/' + id)
      .then(({ data }) => {
        if (data.success) {
          this.setState({ actuality: data.data });
        }
      })
      .catch(console.error);
  }

  render() {
    const { language } = this.props;
    const { actuality } = this.state;

    return <ActualitiesGetOneView translations={translations[language]} actuality={actuality} />;
  }
}

export default connect(mapStateToProps)(ActualitiesGetOneContainer);
