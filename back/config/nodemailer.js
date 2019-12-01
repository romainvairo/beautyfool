const nodemailer = require('nodemailer');

const user = 'bonoboinconnu91@gmail.com';
const pass = 'xiesdexpprmjnlxs';

const transporter = nodemailer.createTransport({
  // define emailing service
  service: 'gmail',
  // email app authentication
  auth: {
    user,
    pass,
  },
  tls: {
    rejectUnauthorized: false
  }
});

exports.transporter = transporter;
exports.user = user;
