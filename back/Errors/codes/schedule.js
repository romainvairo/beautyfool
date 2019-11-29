let i = 400;

/**
 * @typedef {import('./types')} ControllerErrorCode
 * @type {ControllerErrorCode}
 */
module.exports = {
  findAll: {
    code: i++,
    message: "An error occured and the schedules couldn't be retrieved"
  },
  add: {
    code: i++,
    message: "An error occured and the schedule couldn't be added"
  },
  findById: {
    code: i++,
    message: "An error occured and the schedule couldn't be retrieved"
  },
  editById: {
    code: i++,
    message: "An error occured and the schedule couldn't be edited"
  },
  deleteById: {
    code: i++,
    message: "An error occured and the schedule couldn't be deleted"
  },
};
