import React from 'react';
import { connect } from 'react-redux';

import { Auth } from '../../../services';
import ProfileView from './Profile-view';
import translations from './translations';
import axios from '../../../axios';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
  user: state.clientReducer.user,
});

class ProfileContainer extends React.PureComponent {

  state = {
    isNewsletterChecked: this.props.user.newsletterSubscribed,
  }

  onToggle = name => {
    const { user } = this.props;

    this.setState(state => {
      const { isNewsletterChecked } = state;

      axios.post(`/api/users/${user._id}/newsletter-subscription/set`, {
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

  onDelete = () => {
    axios.delete(`/api/users/${Auth.getUser()._id}/delete`)
      .then(() => {
        Auth.logout();
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
    />;
  }
}

export default connect(mapStateToProps)(ProfileContainer);
