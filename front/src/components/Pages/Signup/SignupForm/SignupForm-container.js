import React from 'react';
import { connect } from 'react-redux';

import { Auth } from '../../../../services/Auth';
import axios from '../../../../axios';
import SignupFormView from './SignupForm-view';
import translations from './translations';

const mapStateToProps = (state) => ({
  language: state.clientReducer.language,
});

class SignupFormContainer extends React.PureComponent {

  state = {
    firstname:'',
    lastname:'',
    username:'',
    email: '',
    password: '',
    confirmedPassword: '',
    subscribeNewsLetter: false,
    error: '',
  }

  onChange = (fieldName, prop = 'value') => event => {
    this.setState({ [fieldName]: event.target[prop] })
  }

  submit = e => {
    const { history, language } = this.props;
    e.preventDefault();

    axios.post('/api/signup', this.state)
      .then(({ data }) => {
        if (data.success) {
          Auth.signup(data.data);
          this.setState({ error: translations[language].signup });

          setTimeout(() => {
            history.push('/');
          }, 1500);
        } else {
          this.setState({ error: translations[language].errors[data.error.code] });
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      confirmedPassword,
      subscribeNewsLetter,
    } = this.state;

    const { language } = this.props;

    return <SignupFormView
      onChange={this.onChange}
      onSubmit={this.submit}
      translations={translations[language]}
      firstname={firstname}
      lastname={lastname}
      username={username}
      email={email}
      password={password}
      confirmedPassword={confirmedPassword}
      subscribeNewsLetter={subscribeNewsLetter}
    />;
  }
}

export default connect(mapStateToProps, null)(SignupFormContainer);
