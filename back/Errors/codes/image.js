let i = 900;

/**
 * @typedef {import('./types')} ControllerErrorCode
 * @type {ControllerErrorCode}
 */
module.exports = {
  findAll: {
    code: i++,
    message: "An error occured and the images couldn't be retrieved"
  },
  add: {
    code: i++,
    message: "An error occured and the image couldn't be added"
  },
  findById: {
    code: i++,
    message: "An error occured and the image couldn't be retrieved"
  },
  editById: {
    code: i++,
    message: "An error occured and the image couldn't be edited"
  },
  deleteById: {
    code: i++,
    message: "An error occured and the image couldn't be deleted"
  },
};
