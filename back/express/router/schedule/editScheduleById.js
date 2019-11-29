const { ScheduleController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { RequestHandler } = require('../../../services');

module.exports = (req, res) => {
  const { id, ...schedule } = req.body;

  new RequestHandler(res)
    .error(errorCodes.schedule.editById)
    .then(() => ScheduleController.editById(id, schedule));
}
