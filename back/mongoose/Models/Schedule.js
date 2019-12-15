const mongoose = require('mongoose');

const schedule = new mongoose.Schema({
  createdAt: {
    type: Date,
    required: true,
    default: () => new Date,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: () => new Date,
  },
  blockStart: {
    type: Date,
    required: true,
  },
  blockEnd: {
    type: Date,
    required: true,
  },
  appointment: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Appointment',
  },
});

const ScheduleModel = mongoose.model('Schedule', schedule);

exports.schedule = schedule;
exports.ScheduleModel = ScheduleModel;
