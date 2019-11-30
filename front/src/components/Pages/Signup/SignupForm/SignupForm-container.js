import React from 'react';
import { connect } from 'react-redux';

import SignupFormView from './SignupForm-view';
import translations from './translations';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});

class SignupFormContainer extends React.PureComponent {

  state = {

    firstName:'',
    lastName:'',
    userName:'',
    email: '',
    password: '',
    confirmedPassword: '',
    subscribeNewsLetter: false,

  }

  onChange = (fieldName, prop = 'value') => event => {
    this.setState({ [fieldName]: event.target[prop] })
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
    const {
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmedPassword,
      subscribeNewsLetter,
    } = this.state;

    const { language } = this.props;

    return <SignupFormView
      onChange={this.onChange}
      translations={translations[language]}
      firstName={firstName}
      lastName={lastName}
      userName={userName}
      email={email}
      password={password}
      confirmedPassword={confirmedPassword}
      subscribeNewsLetter={subscribeNewsLetter}
    />;
  }
}

export default connect(mapStateToProps, null)(SignupFormContainer);
