import React from 'react';
import { connect } from 'react-redux';

import UsersGetOneView from './UsersGetOne-view';
import translations from './translations';
import axios from '../../../../../axios';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class UsersGetOneContainer extends React.PureComponent {

  state = {
    user: {},
  }

  componentDidMount() {
    const { id } = this.props;

    axios.get('/api/users/' + id)
      .then(({ data }) => {
        if (data.success) {
          this.setState({ user: data.data });
        }
      })
      .catch(console.error);
  }

  render() {
    const { language } = this.props;
    const { user } = this.state;

    return <UsersGetOneView translations={translations[language]} user={user} />;
  }
}

export default connect(mapStateToProps)(UsersGetOneContainer);
