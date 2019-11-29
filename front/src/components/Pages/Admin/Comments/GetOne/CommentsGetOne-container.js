import React from 'react';
import { connect } from 'react-redux';

import CommentsGetOneView from './CommentsGetOne-view';
import translations from './translations';
import axios from '../../../../../axios';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class CommentsGetOneContainer extends React.PureComponent {

  state = {
    comment: {},
  }

  componentDidMount() {
    const { id } = this.props;

    axios.get('/api/comments/' + id)
      .then(({ data }) => {
        if (data.success) {
          this.setState({ comment: data.data });
        }
      })
      .catch(console.error);
  }

  render() {
    const { language } = this.props;
    const { comment } = this.state;

    return <CommentsGetOneView translations={translations[language]} comment={comment} />;
  }
}

export default connect(mapStateToProps)(CommentsGetOneContainer);
