const { AppointmentController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  try {
    await AppointmentController.deleteById(req.body.id);
  } catch (error) {
    return end(res, { error: errorCodes.appointment.deleteById });
  }

  end(res, null, true);
}
