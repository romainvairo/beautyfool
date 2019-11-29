const { AppointmentController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  let appointment;

  try {
    appointment = await AppointmentController.findById(req.body.id);
  } catch (error) {
    return end(res, { error: errorCodes.appointment.findById });
  }

  end(res, { data: appointment } , true);
}
