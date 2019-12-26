import React from 'react';
import { connect } from 'react-redux';

import NewsletterView from './Newsletter-view';
import translations from './translations';
import { onChange } from '../../../../utils';
import axios from '../../../../axios';

const mapStateToProps = state => ({
  language: state.clientReducer.language,
});

class NewsletterContainer extends React.PureComponent {

  state = {
    subject: '',
    message: '',
  }

  onChange = onChange(this);

  onSubmit = e => {
    e.preventDefault();

    axios.post('/api/newsletter/send', this.state)
      .then(() => {
        console.log('success');
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const { subject, message, locale } = this.state;

    return <NewsletterView
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      subject={subject}
      message={message}
    />;
  }
}

export default connect(mapStateToProps)(NewsletterContainer);
