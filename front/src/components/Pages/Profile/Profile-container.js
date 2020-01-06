import React from 'react';
import { connect } from 'react-redux';

import { Auth } from '../../../services';
import ProfileView from './Profile-view';
import translations from './translations';
import axios from '../../../axios';
import { setUserAppointments } from '../../../store/actions/client';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
  user: state.clientReducer.user
});

const mapDispatchToProps = dispatch => ({
  setUserAppointments: value => dispatch(setUserAppointments(value)),
});

class ProfileContainer extends React.PureComponent {

  state = {
    isNewsletterChecked: this.props.user.newsletterSubscribed,
  }

  onToggle = name => {
    const { user } = this.props;

    this.setState(state => {
      const { isNewsletterChecked } = state;

      axios.post(`/api/users/${user._id}/newsletter-subscription/set`,{
        isSubscribed: !isNewsletterChecked,
      })
        .then(({ data }) => {
          if (!data.success) {
            console.error(data.error);
          }
        })
        .catch(err => {
          console.error(err);
        });
      return { [name]: !isNewsletterChecked };
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
    axios.get(`/api/appointments/user/${Auth.getUser()._id}`)
      .then(({ data }) => {
        const { setUserAppointment } = this.props;

        setUserAppointment(data.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const { language, user } = this.props;
    const { isNewsletterChecked } = this.state;

    return <ProfileView
      translations={translations[language]}
      isNewsletterChecked={isNewsletterChecked}
      onToggle={this.onToggle}
      user={user}
      onDelete={this.onDelete}
      onLogout={this.onLogout}
    />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
