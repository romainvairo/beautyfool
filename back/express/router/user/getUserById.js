const { UserController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end, random } = require('../../../utils');

module.exports = async (req, res) => {
  let user;

  try {
    user = await UserController.findById(req.params.id);
  } catch (error) {
    console.error(error);
    res.status(500);
    return end(res, { error: errorCodes.user.findById });
  }

  end(res, { data: user }, true);
}
