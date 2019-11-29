import React from 'react';
import { connect } from 'react-redux';

import CommentsGetAllView from './CommentsGetAll-view';
import translations from './translations';
import axios from '../../../../../axios';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class CommentsGetAllContainer extends React.PureComponent {

  state = {
    comments: [],
  };

  componentDidMount() {
    const { page } = this.props;

    axios.get('/api/comments/' + page)
      .then(({ data }) => {
        if (data.success) {
          this.setState({ comments: data.data });
        }
      })
      .catch(console.error);
  }

  render() {
    const { language } = this.props;
    const { comments } = this.state;

    return <CommentsGetAllView comments={comments} translations={translations[language]} />;
  }
}

export default connect(mapStateToProps)(CommentsGetAllContainer);
