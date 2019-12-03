let i = 1000;

/**
 * @typedef {import('./types')} ControllerErrorCode
 * @type {ControllerErrorCode}
 */
module.exports = {
  findAll: {
    code: i++,
    message: "An error occured and the feedbacks couldn't be retrieved",
    status: 500,
  },
  add: {
    code: i++,
    message: "An error occured and the feedback couldn't be added",
    status: 500,
  },
  findById: {
    code: i++,
    message: "An error occured and the feedback couldn't be retrieved",
    status: 500,
  },
  editById: {
    code: i++,
    message: "An error occured and the feedback couldn't be edited",
    status: 500,
  },
  deleteById: {
    code: i++,
    message: "An error occured and the feedback couldn't be deleted",
    status: 500,
  },
};
