import React from 'react';
import { Link } from 'react-router-dom'

import { Form, PositionElement } from 'dynamic-form';

const fieldsData = ['username', 'password'];

class Login extends React.Component {

  // will be called if the user submit the form and is valid
  onSubmit = formData => {
    console.log('formData:', formData);
  }

  render() {
    return (
      <Form
        fields={fieldsData}
        onSubmit={this.onSubmit}
      >
        {/* `PositionElement` will position its content in the form */}
        {/* in this case the element will be positionned after the 'form-helper' which is the last element in the form */}
        <PositionElement after type="form-helper">
          <Link to="/signup">You do not have an account yet?</Link>
        </PositionElement>
      </Form>
    );
  }
}

export default Login;
