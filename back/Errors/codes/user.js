let i = 0;

/**
 * @typedef {import('./types')} ControllerErrorCode
 * @type {ControllerErrorCode}
 */
module.exports = {
  signup: {
    code: i++,
    message: "Your account couldn't be created",
  },
  login: {
    noUser: {
      code: i++,
      message: "Email or password incorrect",
    },
    other: {
      code: i++,
      message: "An error occured and you couldn't be logged in",
    }
  },
  findAll: {
    code: i++,
    message: "An error occured and the users couldn't be retrieved",
  },
  findById: {
    code: i++,
    message: "An error occured and the user couldn't be retrieved",
  },
  editById: {
    code: i++,
    message: "An error occured and your informations couldn't be edited",
  },
  deleteById: {
    code: i++,
    message: "An error occured and your informations couldn't be edited",
  },
};
