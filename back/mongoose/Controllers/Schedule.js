const { ScheduleModel } = require('../Models/Schedule');

const ScheduleController = {
  add: schedule => {
    return new ScheduleModel(schedule).save();
  },

};

module.exports = ScheduleController;
