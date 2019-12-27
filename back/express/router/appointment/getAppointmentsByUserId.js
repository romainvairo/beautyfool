const { AppointmentController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  let appointments;

  try {
    appointments = await AppointmentController.findByUserId(req.params.user_id);
  } catch (error) {
    return end(res, { error: errorCodes.appointment.findByUserId });
  }

  end(res, { data: appointments }, true);
}
