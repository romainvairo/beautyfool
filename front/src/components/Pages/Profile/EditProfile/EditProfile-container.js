import React from 'react';
import { connect } from 'react-redux';

import EditProfileView from './EditProfile-view';
import AdminUserEdit from '../../Admin/Lists/Edit/Childrens/User';
import translations from './translations';
import { onChange, bufferize } from '../../../../utils';
import axios from '../../../../axios';
import { setUser } from '../../../../store/actions/client';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
  user: state.clientReducer.user,
});

const mapDispatchToProps = dispatch => ({
  setUser: value => {
    dispatch(setUser(value));
  }
});

class EditProfileContainer extends React.PureComponent{

  state = {
    ...this.props.user,
    messageName: '',
    picture: null,
  }

  /* setUser = data => {
    let picture = null;

    if (data.picture) {
      picture = data.picture[0];
      delete data.picture;
    }

    this.setState(state => ({
      ...state.user,
      ...data,
      picture: picture,
    }));
  } */

  onChange = prop => event => {
    console.log('event :', event);
    event.persist()
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [prop]: event.target.value,
      }
    }));
  }

  submit = e => {
<<<<<<< HEAD
    const { user, picture } = this.state;
    console.log('user :', user);
=======
    const { picture } = this.state;
    // Prépare un objet user avec les nouvelles données
    const user = {...this.state};
    delete user.picture;
    delete user.messageName;

>>>>>>> master
    const { user: propsUser, history } = this.props;
    console.log('propsUser :', propsUser);
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
      console.log("userData: ", userData);
      this.editUser(userData);
    }
  }

  editUser = userData => {
    const { user: propsUser, history } = this.props;
    axios.post(`/api/users/${propsUser._id}/edit`, userData)
      .then(({ data }) => {
        if (data.success) {
          // Met a jours le state du reducer client
          this.props.setUser(userData);

          this.setState({ messageName: 'success' });;

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
    const { user } = this.props;
    const {
      messageName,
      // lastname,
      // firstname,
      // username,
      // address,
      // zipcode,
      // city,
      // birthdate,
      // phone,
      // email,
      // picture,
    } = this.state;

    return <EditProfileView
      user={user}
      translations={translations[language]}
      onChange={this.onChange}
      onSubmit={this.submit}
      messageName={messageName}
      {...user}
      // lastname={lastname}
      // firstname={firstname}
      // username={username}
      // address={address}
      // zipcode={zipcode}
      // city={city}
      // birthdate={birthdate}
      // phone={phone}
      // email={email}
      // picture={picture}
    />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileContainer);
