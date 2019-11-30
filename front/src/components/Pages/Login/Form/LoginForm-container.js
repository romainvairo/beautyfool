import React from 'react';
import { connect } from 'react-redux';

import LoginFormView from './LoginForm-view';
import translations from './translations';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});

class LoginFormContainer extends React.PureComponent {

  state = {
    email: '',
    password: '',
  }

  onChange = fieldName => event => {
    this.setState({ [fieldName]: event.target.value })
  }

  /*sendRequest = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3000/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then(this.handleResponse)
      .catch();
  }*/

  render() {
    const { password, email } = this.state;
    const { language } = this.props;

    return <LoginFormView
      onChange={this.onChange}
      translations={translations[language]}
      password={password}
      email={email}
    />;
  }
}

export default connect(mapStateToProps, null)(LoginFormContainer);
