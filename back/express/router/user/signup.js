const UserController = require('../../../mongoose/Controllers/User');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

// asynchronous function will be called if there's a POST request to the URL
module.exports = async (req, res) => {
  try {
    await UserController.add(req.body);
  } catch (error) {
    // @ts-ignore
    return end(res, { error: errorCodes.user.signup });
  }

  // end === end the request otherwise it never ends
  end(res, null, true);
}
