const { UserController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');
const { emailer } = require('../../../services');

module.exports = (req, res) => {
  const { subject, message } = req.body;

  const emailSent = {
    success: 0,
    fail: 0,
  };

  console.log('send newsletter')

  UserController.findForNewsletter().cursor()
    .on('data', async (doc) => {
      console.log('send email to', doc.email)
      await emailer({
        from: 'user',
        replyTo: 'no-reply',
        to: doc.email,
        subject: subject,
        message: message,
      });
      emailSent.success++;
    })
    .on('error', (err) => {
      emailSent.fail++;
      console.error(err);
    })
    .on('closed', () => {
      console.log('closed')
      end(res, emailSent, true);
    })
    .on('end', () => {
      console.log('end')
      end(res, emailSent, true);
    });
}
