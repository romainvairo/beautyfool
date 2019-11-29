const { UserController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  let user;

  try {
    user = await UserController.findById(req.body.id);
  } catch (error) {
    return end(res, { error: errorCodes.user.findById });
  }

  end(res, { data: user }, true);
}
