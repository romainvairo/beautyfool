let i = 500;

/**
 * @typedef {import('./types')} ControllerErrorCode
 * @type {ControllerErrorCode}
 */
module.exports = {
  findAll: {
    code: i++,
    message: "An error occured and the beauty tips couldn't be retrieved",
    status: 500,
  },
  add: {
    code: i++,
    message: "An error occured and your informations couldn't be added",
    status: 500,
  },
  findById: {
    code: i++,
    message: "An error occured and the beauty tip couldn't be retrieved",
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
  findNewest: {
    code: i++,
    message: "An error occured and your informations couldn't be retrieved",
    status: 500,
  },
  getCount: {
    code: i++,
    message: "An error occured and the informations couldn't be retrieved",
    status: 500,
  }
};
