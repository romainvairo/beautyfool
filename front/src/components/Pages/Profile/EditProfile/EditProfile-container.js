import React from 'react';
import { connect } from 'react-redux';

import EditProfileView from './EditProfile-view';
import AdminUserEdit from '../../Admin/Lists/Edit/Childrens/User';
import translations from './translations';
import { onChange, bufferize } from '../../../../utils';
import axios from '../../../../axios';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
  user: state.clientReducer.user,
});

class EditProfileContainer extends React.PureComponent{

  state = {
    user: this.props.user,
    messageName: '',
    lastname: '',
    firstname: '',
    username: '',
    address: '',
    zipcode: '',
    city: '',
    birthdate: '',
    phone: '',
    email: '',
    picture: null,
  }

  setUser = data => {
    let picture = null;

    if (data.picture) {
      picture = data.picture[0];
      delete data.picture;
    }

    this.setState(state => ({
      user: {
        ...state.user,
        ...data,
      },
      picture: picture,
    }));
  }

  onChange = onChange(this, 'setUser');

  submit = e => {
    const { user, picture } = this.state;
    const { user: propsUser, history } = this.props;
    e.preventDefault();

    // compare the data of the user in the state and props.
    // send only the different data and avoid to send data that doesn't change
    const userData = AdminUserEdit.difference(user, propsUser);

    if (picture) {
      bufferize(picture)
        .then(arrayBuffer => {
          userData.picture = arrayBuffer;
          userData.pictureName = picture.name;

          this.editUser(userData);
        })
        .catch(err => {
          this.setState({ messageName: 'error' });
          console.error(err);
        });
    } else {
      this.editUser(userData);
    }
  }

  editUser = userData => {
    const { user: propsUser, history } = this.props;

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
    const {
      user,
      messageName,
      lastname,
      firstname,
      username,
      address,
      zipcode,
      city,
      birthdate,
      phone,
      email,
      picture,
     } = this.state;

    return <EditProfileView
      user={user}
      translations={translations[language]}
      onChange={this.onChange}
      onSubmit={this.submit}
      messageName={messageName}
      lastname={lastname}
      firstname={firstname}
      username={username}
      address={address}
      zipcode={zipcode}
      city={city}
      birthdate={birthdate}
      phone={phone}
      email={email}
      picture={picture}
    />;
  }
}

export default connect(mapStateToProps)(EditProfileContainer);
