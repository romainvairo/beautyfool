let i = 1000;

/**
 * @typedef {import('./types')} ControllerErrorCode
 * @type {ControllerErrorCode}
 */
module.exports = {
  findAll: {
    code: i++,
    message: "An error occured and the feedbacks couldn't be retrieved"
  },
  add: {
    code: i++,
    message: "An error occured and the feedback couldn't be added"
  },
  findById: {
    code: i++,
    message: "An error occured and the feedback couldn't be retrieved"
  },
  editById: {
    code: i++,
    message: "An error occured and the feedback couldn't be edited"
  },
  deleteById: {
    code: i++,
    message: "An error occured and the feedback couldn't be deleted"
  },
};
