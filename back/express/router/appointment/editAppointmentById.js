const { AppointmentController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  const { id, ...appointment } = req.body;

  try {
    await AppointmentController.editById(id, appointment);
  } catch (error) {
    return end(res, { error: errorCodes.appointment.editById });
  }

  end(res, null, true);
}
