const { user, transporter } = require('../config/nodemailer');

/**
 * send email
 * @param {Object} options
 * @param {String} options.message
 * @param {String} options.subject
 * @param {String=} options.html
 * @param {String=} options.sender
 * @param {String=} options.from
 * @param {String=} options.replyTo
 * @param {String=} options.to
 * @returns {Promise}
 */
const emailer = options => new Promise((resolve, reject) => {
  // set `from` option
  options.from = options.from || options.sender;
  // set `replyTo` option
  options.replyTo = options.replyTo || options.sender;

  // if value is "user" then we want the registered user email to be set
  if (options.from === 'user') {
    options.from = user;
  }

  // if value is "user" then we want the registered user email to be set
  if (options.replyTo === 'user') {
    options.replyTo = user;
  }

  // set `to` option
  options.to = options.to || user;
  // set `html` option
  options.html = options.message;

  // TODO add capability to attach files

  // send the mail
  transporter.sendMail(options, (err, info) => {
    if (err) {
      return reject(err);
    }

    resolve(info);
  });
});

module.exports = emailer;
