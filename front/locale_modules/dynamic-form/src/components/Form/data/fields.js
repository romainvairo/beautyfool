export const fieldsData = {
  username: {
    name: 'username',
    label: 'Username',
    validations: ['required', 'length:3-40'],
    transformations: ['trim'],
  },
  password: {
    name: 'password',
    label: 'Password',
    type: 'password',
    validations: ['required', 'length:8-100'],
  },
  confirmPassword: {
    name: 'confirmPassword',
    label: 'Password confirmation',
    type: 'password',
    validations: ['required', 'length:8-100', 'passwordMatch'],
  },
  email: {
    name: 'email',
    label: 'Email',
    validations: ['email'],
    transformations: ['trim'],
  },
}
