import React from 'react';
import { connect } from 'react-redux';

import FeedbacksGetAllView from './FeedbacksGetAll-view';
import translations from './translations';
import axios from '../../../../../axios';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class FeedbacksGetAllContainer extends React.PureComponent {

  state = {
    feedbacks: [],
  };

  componentDidMount() {
    const { page } = this.props;

    axios.get('/api/feedbacks/' + page)
      .then(({ data }) => {
        if (data.success) {
          this.setState({ feedbacks: data.data });
        }
      })
      .catch(console.error);
  }

  render() {
    const { language } = this.props;
    const { feedbacks } = this.state;

    return <FeedbacksGetAllView feedbacks={feedbacks} translations={translations[language]} />;
  }
}

export default connect(mapStateToProps)(FeedbacksGetAllContainer);
