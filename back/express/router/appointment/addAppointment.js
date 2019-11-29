const { AppointmentController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  try {
    await AppointmentController.add(req.body);
  } catch (error) {
    return end(res, { error: errorCodes.appointment.add });
  }

  end(res, null, true);
}
