import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import EditProfileView from './EditProfile-view';
import translations from './translations';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class EditProfileContainer extends React.PureComponent{

    state = {
      user: [],
    }

    componentDidMount() {
      axios.put('/api/profile/edit-profile')
      .then(({ data }) => {
        this.setState({ user: data.data });
      })
      .catch((error) =>{
        console.error(error);
      })
    }

  render() {
    const { language } = this.props;
    const { user } = this.state;
    
    return <EditProfileView user={user} translations={translations[language]} />;
  }
}

export default connect(mapStateToProps)(EditProfileContainer);
