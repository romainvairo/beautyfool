import React from 'react';
import { connect } from 'react-redux';

import CalendarGetAllView from './CalendarGetAll-view';
import translations from './translations';
import axios from '../../../../../axios';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class CalendarGetAllContainer extends React.PureComponent {

  state = {
    schedules: [],
  };

  componentDidMount() {
    const { page } = this.props;

    axios.get('/api/schedules/' + page)
      .then(({ data }) => {
        if (data.success) {
          this.setState({ schedules: data.data });
        }
      })
      .catch(console.error);
  }

  render() {
    const { language } = this.props;
    const { schedules } = this.state;

    return <CalendarGetAllView schedules={schedules} translations={translations[language]} />;
  }
}

export default connect(mapStateToProps)(CalendarGetAllContainer);
