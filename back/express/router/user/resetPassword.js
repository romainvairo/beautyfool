const { UserController } = require('../../../mongoose/Controllers');
const { emailer, passwordGenerator } = require('../../../services');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  const { email } = req.params;

  try {
    const newPassword = passwordGenerator();

    await UserController.editPasswordByEmail(email, newPassword);

    await emailer({
      sender: 'user',
      to: email,
      subject: 'Password reset',
      message: (
        'Your password on the website beautyfool.com has been reset' +
        '<br/>' +
        'Your new password is: ' + newPassword
      ),
    });
  } catch (error) {
    console.error(error);

    end(res, null);
  }

  end(res, null, true);
}
