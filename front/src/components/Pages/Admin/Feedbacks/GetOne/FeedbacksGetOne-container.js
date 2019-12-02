import React from 'react';
import { connect } from 'react-redux';

import FeedbacksGetOneView from './FeedbacksGetOne-view';
import translations from './translations';
import axios from '../../../../../axios';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class FeedbacksGetOneContainer extends React.PureComponent {

  state = {
    feedback: {},
  }

  componentDidMount() {
    const { id } = this.props;

    axios.get('/api/feedbacks/' + id)
      .then(({ data }) => {
        if (data.success) {
          this.setState({ feedback: data.data });
        }
      })
      .catch(console.error);
  }

  render() {
    const { language } = this.props;
    const { feedback } = this.state;

    return <FeedbacksGetOneView translations={translations[language]} feedback={feedback} />;
  }
}

export default connect(mapStateToProps)(FeedbacksGetOneContainer);
