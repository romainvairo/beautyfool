import React from 'react';
import { connect } from 'react-redux';

import axios from '../../../../axios';
import UsersView from './Users-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class UsersContainer extends React.PureComponent {

  componentDidMount() {
    axios.get('/api/users/')
      .then(console.log)
      .catch(console.log);
  }


  render() {
    const { language } = this.props;

    return <UsersView translations={translations[language]} />;
  }
}

export default connect(mapStateToProps)(UsersContainer);
