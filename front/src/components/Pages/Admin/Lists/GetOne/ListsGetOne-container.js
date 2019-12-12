import React from 'react';
import { connect } from 'react-redux';

import ListsGetOneView from './ListsGetOne-view';
import translations from './translations';
import axios from '../../../../../axios';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class ListsGetOneContainer extends React.PureComponent {

  state = {
    category: {},
  }

  componentDidMount() {
    const { id, match } = this.props;

    axios.get(`/api/${match.params.category}/${id}`)
      .then(({ data }) => {
        if (data.success) {
          this.setState({ category: data.data });
        }
      })
      .catch(console.error);
  }

  render() {
    const { language } = this.props;
    const { category } = this.state;

    return <ListsGetOneView translations={translations[language]} category={category} />;
  }
}

export default connect(mapStateToProps)(ListsGetOneContainer);
