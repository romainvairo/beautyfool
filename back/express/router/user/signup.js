const UserController = require('../../../mongoose/Controllers/User');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');
const { emailer } = require('../../../services');

// asynchronous function will be called if there's a POST request to the URL
module.exports = async (req, res) => {
  const { email } = req.body;
  console.log('signup')

  try {
    const user = await UserController.add(req.body);

    emailer({
      from: 'user',
      replyTo: 'user',
      to: email,
      message: (
        'your account has been created' +
        '<br/>' +
        `<a href="http://localhost:3000/email/confirm/${user._id}"`
      ),
      subject: 'account creation',
    })
      .then(console.log)
      .catch(console.error);
  } catch (error) {
    console.error(error);

    return end(res, { error: errorCodes.user.signup });
  }

  // end === end the request otherwise it never ends
  end(res, null, true);
}
