import React from 'react';
import SignupForm from './SignupForm';

const SignupView = ({ translations }) => (
  <section className="Signup">
    <h1>{ translations.title }</h1>
    <SignupForm />
  </section>
);

export default SignupView;
