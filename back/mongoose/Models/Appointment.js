const mongoose = require('mongoose');

const appointment = new mongoose.Schema({
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
  date: {
    type: Date,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  services: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    }],
    default: []
  }
});

const AppointmentModel = mongoose.model('Appointment', appointment);

exports.appointment = appointment;
exports.AppointmentModel = AppointmentModel;
