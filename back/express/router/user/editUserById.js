const { UserController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  try {
    await UserController.editById(req.params.id, req.body);
  } catch (error) {
    console.error(error);
    return end(res, { error: errorCodes.user.editById });
  }

  end(res, null, true);
}
