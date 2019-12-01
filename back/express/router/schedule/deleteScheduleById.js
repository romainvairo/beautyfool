const { ScheduleController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { RequestHandler } = require('../../../services');

module.exports = (req, res) => {
  new RequestHandler(res)
    .error(errorCodes.schedule.deleteById)
    .then(() => ScheduleController.deleteById(req.params.id));
}
