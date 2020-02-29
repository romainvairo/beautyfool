import React from 'react';
import { connect } from 'react-redux';

import { Auth } from '../../../services/Auth';
import ProfileView from './Profile-view';
import translations from './translations';
import axios from '../../../axios';
import { setUser, setUserAppointments } from '../../../store/actions/client';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
  user: state.clientReducer.user
});

const mapDispatchToProps = dispatch => ({
  setUserAppointments: value => dispatch(setUserAppointments(value)),
  setUser: value => dispatch(setUser(value)),
});

class ProfileContainer extends React.Component {
  componentDidMount = () => {
    // On récupèere tout les rdv au montage du composant
    this.findAppointmentsByUserId();
  }

  onToggle = () => {
    const { user, setUser } = this.props;

    axios.post(`/api/users/${user._id}/newsletter-subscription/set`, {
      isSubscribed: !user.newsletterSubscribed,
    })
      .then(({ data }) => {
        if (!data.success) {
          console.error(data.error);
        } else {
          setUser({newsletterSubscribed: !user.newsletterSubscribed});
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  onLogout = () => {
    const { history } = this.props;

    Auth.logout();
    history.push('/');
  }

  onDelete = () => {
    const { history } = this.props;

    axios.delete(`/api/users/${Auth.getUser()._id}/delete`)
      .then(() => {
        Auth.logout();
        history.push('/');
      })
      .catch(err => {
        console.error(err);
      });
  }

  findAppointmentsByUserId = () => {
    const { setUserAppointments } = this.props;
    axios.get(`/api/appointments/user/${Auth.getUser()._id}`)
      .then(({ data }) => {

        setUserAppointments(data.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const { language, user } = this.props;

    return <ProfileView
      translations={translations[language]}
      isNewsletterChecked={user.newsletterSubscribed}
      onToggle={this.onToggle}
      user={user}
      appointments={user.appointments}
      onDelete={this.onDelete}
      onLogout={this.onLogout}
    />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
