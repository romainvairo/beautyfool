let i = 100;

/**
 * @typedef {import('./types')} ControllerErrorCode
 * @type {ControllerErrorCode}
 */
module.exports = {
  findAll: {
    code: i++,
    message: "An error occured and the users couldn't be retrieved",
    status: 500,
  },
  add: {
    code: i++,
    message: "An error occured and your informations couldn't be edited",
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
    message: "An error occured and your informations couldn't be edited",
    status: 500,
  },
  findNewest: {
    code: i++,
    message: "An error occured and your informations couldn't be retrieved",
    status: 500,
  }
};
