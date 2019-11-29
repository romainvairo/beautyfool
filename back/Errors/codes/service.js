let i = 200;

/**
 * @typedef {import('./types')} ControllerErrorCode
 * @type {ControllerErrorCode}
 */
module.exports = {
  findAll: {
    code: i++,
    message: "An error occured and the services couldn't be retrieved"
  },
  add: {
    code: i++,
    message: "An error occured and the service couldn't be added"
  },
  findById: {
    code: i++,
    message: "An error occured and the service couldn't be retrieved"
  },
  editById: {
    code: i++,
    message: "An error occured and the service couldn't be edited"
  },
  deleteById: {
    code: i++,
    message: "An error occured and the service couldn't be deleted"
  },
};
