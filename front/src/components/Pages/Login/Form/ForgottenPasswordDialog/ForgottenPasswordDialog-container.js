import React from 'react';

import ForgottenPasswordDialogView from './ForgottenPasswordDialog-view';
import { onChange } from '../../../../../utils';
import axios from '../../../../../axios';

class ForgottenPasswordDialogContainer extends React.PureComponent {

  state = {
    email: '',
    message: '',
  }

  onChange = onChange(this);

  onSubmit = e => {
    const { email } = this.state;
    e.preventDefault();

    axios.get(`/api/users/email/${email}/password/reset`)
      .then(({ data }) => {
        if (data.success) {
          this.setState({ message: 'An email has been sent with your new password' });
        } else {
          this.setState({ message: 'An error occured and your password could\'t be reset' });
        }
      })
      .catch(err => {
        this.setState({ message: 'An error occured and your password could\'t be reset' });
        console.error(err);
      });
  }

  render() {
    const { open, onClose } = this.props;
    const { email, message } = this.state;

    return <ForgottenPasswordDialogView
      open={open}
      onClose={onClose}
      email={email}
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      message={message}
    />;
  }
}

export default ForgottenPasswordDialogContainer;
