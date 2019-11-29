let i = 300;

/**
 * @typedef {import('./types')} ControllerErrorCode
 * @type {ControllerErrorCode}
 */
module.exports = {
  findAll: {
    code: i++,
    message: "An error occured and the users couldn't be retrieved",
  },
  add: {
    code: i++,
    message: "An error occured and your informations couldn't be edited",
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
