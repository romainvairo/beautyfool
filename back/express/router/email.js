const { app } = require('../../config/server');
const { emailer } = require('../../services');
const { end } = require('../../utils');

app.post('/api/email/send', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await emailer({
      from: 'user',
      replyTo: email,
      subject: subject,
      message: (
        'This message has been sent by: ' + name +
        '<br/>' +
        'Using this email: ' + email +
        '<br/>' +
        '<br/>' +
        '<p>' + message + '</p>'
      ),
    });
  } catch (error) {
    console.error(error);

    end(res, null);
  }

  end(res, null, true);
});
