import React from 'react';
import { connect } from 'react-redux';

import CalendarGetOneView from './CalendarGetOne-view';
import translations from './translations';
import axios from '../../../../../axios';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class CalendarGetOneContainer extends React.PureComponent {

  state = {
    schedule: {},
  }

  componentDidMount() {
    const { id } = this.props;

    axios.get('/api/schedules/' + id)
      .then(({ data }) => {
        if (data.success) {
          this.setState({ schedule: data.data });
        }
      })
      .catch(console.error);
  }

  render() {
    const { language } = this.props;
    const { schedule } = this.state;

    return <CalendarGetOneView translations={translations[language]} schedule={schedule} />;
  }
}

export default connect(mapStateToProps)(CalendarGetOneContainer);
