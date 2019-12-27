import React from 'react';
import { connect } from 'react-redux';

import LoginFormView from './LoginForm-view';
import translations from './translations';
import axios from '../../../../axios';
import { Auth } from '../../../../services';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});

class LoginFormContainer extends React.PureComponent {

  state = {
    email: '',
    password: '',
    error: '',
    openDialog: false,
  }

  onChange = fieldName => event => {
    this.setState({ [fieldName]: event.target.value })
  }

  submit = e => {
    const { email, password } = this.state;
    const { history, language } = this.props;
    e.preventDefault();

    console.log('login submit')

    axios.post('/api/login', {
      email: email,
      password: password,
    })
      .then(({ data }) => {
        if (data.success) {
          Auth.login(data.data);
          this.setState({ error: translations[language].logged });

          setTimeout(() => {
            history.push('/');
          }, 1500);
        } else {
          this.setState({ error: translations[language].errors[data.error.code] })
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  onOpen = () => this.setState({ openDialog: true });
  onClose = () => this.setState({ openDialog: false });

  render() {
    const { password, email, error, openDialog } = this.state;
    const { language } = this.props;

    return <LoginFormView
      onChange={this.onChange}
      onSubmit={this.submit}
      translations={translations[language]}
      password={password}
      email={email}
      error={error}
      openDialog={openDialog}
      onOpen={this.onOpen}
      onClose={this.onClose}
    />;
  }
}

export default connect(mapStateToProps, null)(LoginFormContainer);
