import React from 'react';
import { connect } from 'react-redux';

import EditProfileView from './EditProfile-view';
import AdminUserEdit from '../../Admin/Lists/Edit/Childrens/User';
import translations from './translations';
import { onChange } from '../../../../utils';
import axios from '../../../../axios';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
  user: state.clientReducer.user,
});

class EditProfileContainer extends React.PureComponent{

  state = {
    user: this.props.user,
    messageName: '',
  }

  setUser = data => {
    this.setState(state => ({
      user: {
        ...state.user,
        ...data,
      }
    }));
  }

  onChange = onChange(this, 'setUser');

  submit = e => {
    const { user } = this.state;
    const { user: propsUser, history } = this.props;
    e.preventDefault();

    // compare the data of the user in the state and props.
    // send only the different data and avoid to send data that doesn't change
    const userData = AdminUserEdit.difference(user, propsUser);

    axios.post(`/api/users/${propsUser._id}/edit`, userData)
      .then(({ data }) => {
        if (data.success) {
          this.setState({ messageName: 'success' });

          setTimeout(() => {
            history.push('/profile');
          }, 1500);
        } else {
          this.setState({ messageName: 'error' });
        }
      })
      .catch(err => {
        this.setState({ messageName: 'error' });
        console.error(err);
      });
  }

  render() {
    const { language } = this.props;
    const { user, messageName } = this.state;

    return <EditProfileView
      user={user}
      translations={translations[language]}
      onChange={this.onChange}
      messageName={messageName}
    />;
  }
}

export default connect(mapStateToProps)(EditProfileContainer);
