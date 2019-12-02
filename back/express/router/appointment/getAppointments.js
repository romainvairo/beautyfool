const { AppointmentController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  let appointments;

  try {
    appointments = await AppointmentController.findActualities(req.params.page);
  } catch (error) {
    return end(res, { error: errorCodes.appointment.findAll });
  }

  end(res, { data: appointments } , true);
}
