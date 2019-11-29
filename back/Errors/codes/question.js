let i = 700;

/**
 * @typedef {import('./types')} ControllerErrorCode
 * @type {ControllerErrorCode}
 */
module.exports = {
  findAll: {
    code: i++,
    message: "An error occured and the questions couldn't be retrieved"
  },
  add: {
    code: i++,
    message: "An error occured and the question couldn't be added"
  },
  findById: {
    code: i++,
    message: "An error occured and the question couldn't be retrieved"
  },
  editById: {
    code: i++,
    message: "An error occured and the question couldn't be edited"
  },
  deleteById: {
    code: i++,
    message: "An error occured and the question couldn't be deleted"
  },
};
