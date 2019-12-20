const { UserController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  try {
    await UserController.confirmEmail(req.params.id);
  } catch (error) {
    console.log(error);
    return end(res, { error: errorCodes.user.confirmEmail });
  }

  end(res, null, true);
}
