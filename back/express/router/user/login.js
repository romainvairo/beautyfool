const UserController = require('../../../mongoose/Controllers/User');
const { errorCodes, BaseError } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  let user;

  // try to get the user from its email and password
  try {
    user = await UserController.login(req.body);
    // if there is an error we end the request and send an error
  } catch (error) {
    console.error(error);
    // get the correct error to send to the client
    error = BaseError.correctError(error, errorCodes.user.login.other);


    // return is to avoid from executing unecessary code
    // res is to call the end method
    return end(res, { error });
  }

  // send the user data and end the request
  end(res, { data: user }, true);
}
