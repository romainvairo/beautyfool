let i = 800;

/**
 * @typedef {import('./types')} ControllerErrorCode
 * @type {ControllerErrorCode}
 */
module.exports = {
  findAll: {
    code: i++,
    message: "An error occured and the roles couldn't be retrieved"
  },
  add: {
    code: i++,
    message: "An error occured and the role couldn't be added"
  },
  findById: {
    code: i++,
    message: "An error occured and the role couldn't be retrieved"
  },
  editById: {
    code: i++,
    message: "An error occured and the role couldn't be edited"
  },
  deleteById: {
    code: i++,
    message: "An error occured and the role couldn't be deleted"
  },
};
