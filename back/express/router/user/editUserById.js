const { UserController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  const { id, ...user } = req.body;

  try {
    await UserController.editById(id, user);
  } catch (error) {
    return end(res, { error: errorCodes.user.editById });
  }

  end(res, null, true);
}
