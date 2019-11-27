const { AppointmentModel } = require('../Models/Appointment');

const AppointmentController = {
    add: appointment => {
        return new AppointmentModel(appointment).save();
    },
};

module.exports = AppointmentController;
