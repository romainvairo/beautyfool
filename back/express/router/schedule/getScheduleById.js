const { ScheduleController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { RequestHandler } = require('../../../services');

module.exports = (req, res) => {
  new RequestHandler(res)
    .error(errorCodes.schedule.findById)
    .then(() => ScheduleController.findById(req.body.id));
}
