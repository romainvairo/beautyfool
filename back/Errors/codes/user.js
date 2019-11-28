module.exports = {
  signup: {
    code: 0,
    message: "Your account couldn't be created",
  },
  login: {
    noUser: {
      code: 1,
      message: "The user doesn't exists",
    },
    incorrectPassword: {
      code: 2,
      message: 'Your password is incorrect',
    },
    other: {
      code: 3,
      message: "An error occured and you couldn't be logged in",
    }
  }
};
