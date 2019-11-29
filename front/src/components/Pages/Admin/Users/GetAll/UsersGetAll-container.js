import React from 'react';
import { connect } from 'react-redux';

import axios from '../../../../../axios';
import UsersGetAllView from './UsersGetAll-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class UsersGetAllContainer extends React.PureComponent {

  state = {
    users: [],
  };

  componentDidMount() {
    const { page } = this.props;

    axios.get('/api/users/' + page)
      .then(({ data }) => {
        if (data.success) {
          this.setState({ users: data.data });
        }
      })
      .catch(console.error);
  }

  render() {
    const { language } = this.props;
    const { users } = this.state;

    return <UsersGetAllView users={users} translations={translations[language]} />;
  }
}

export default connect(mapStateToProps)(UsersGetAllContainer);
