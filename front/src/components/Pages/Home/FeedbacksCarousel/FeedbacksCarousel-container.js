import React from 'react';
import { connect } from 'react-redux';

import FeedbacksCarouselView from './FeedbacksCarousel-view';
import axios from '../../../../axios';

import translations from './translations';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});

class FeedbacksCarouselContainer extends React.PureComponent {

  state = {
    feedbacks: []
  }

  componentDidMount() {
    axios.get('api/feedbacks/page/1')
      .then(({ data }) => {
        this.setState({ feedbacks: data.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { language } = this.props;
    const { feedbacks } = this.state;

    return (
      <>
        {feedbacks.length > 0 &&
          <FeedbacksCarouselView translations={translations[language]} feedbacks={feedbacks} />
        }
      </>
    );
  }
}

export default connect(mapStateToProps, null)(FeedbacksCarouselContainer);
