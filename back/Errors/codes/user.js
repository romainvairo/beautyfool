let i = 0;

/**
 * @typedef {import('./types')} ControllerErrorCode
 * @type {ControllerErrorCode}
 */
module.exports = {
  signup: {
    code: i++,
    message: "Your account couldn't be created",
    status: 500,
  },
  login: {
    noUser: {
      code: i++,
      message: "Email or password incorrect",
      status: 400,
    },
    other: {
      code: i++,
      message: "An error occured and you couldn't be logged in",
      status: 500,
    }
  },
  findAll: {
    code: i++,
    message: "An error occured and the users couldn't be retrieved",
    status: 500,
  },
  findById: {
    code: i++,
    message: "An error occured and the user couldn't be retrieved",
    status: 500,
  },
  editById: {
    code: i++,
    message: "An error occured and your informations couldn't be edited",
    status: 500,
  },
  deleteById: {
    code: i++,
    message: "An error occured and your informations couldn't be deleted",
    status: 500,
  },
};
