const { UserController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = (req, res) => {
  const emailSent = {
    success: 0,
    fail: 0,
  };

  UserController.findForNewsletter().cursor()
    .on('data', (doc) => {
      emailSent.success++;
    })
    .on('error', (err) => {
      emailSent.fail++;
      console.error(err);
    })
    .on('closed', () => {
      end(res, { data: emailSent }, true);
    });
}
