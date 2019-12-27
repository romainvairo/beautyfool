import React from 'react';
import { connect } from 'react-redux';

import ContactView from './Contact-view';
import translations from './translations';
import { onChange } from '../../../utils';
import axios from '../../../axios';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});


class ContactContainer extends React.PureComponent {

  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    feedbackMessage: '',
  }

  onSubmit = e => {
    const { name, email, subject, message } = this.state;
    e.preventDefault();

    axios.post('/api/email/send', {
      name,
      email,
      subject,
      message,
    })
      .then(({ data }) => {
        if (data.success) {
          this.setState({ feedbackMessage: 'Your message has been sent' });
        } else {
          this.setState({ feedbackMessage: 'An error occured and your message couldn\'t be sent' });
        }
      })
      .catch(err => {
        console.error(err);
        this.setState({ feedbackMessage: 'An error occured and your message couldn\'t be sent' });
      });
  }

  onChange = onChange(this);

  render() {
    const { language } = this.props;
    const { name, email, subject, message, feedbackMessage } = this.state;

    return <ContactView
      translations={translations[language]}
      name={name}
      email={email}
      subject={subject}
      message={message}
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      feedbackMessage={feedbackMessage}
    />;
  }
}

export default connect(mapStateToProps)(ContactContainer);
