const { ImageController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  try {
    await ImageController.deleteById(req.params.id);
  } catch (error) {
    return end(res, { error: errorCodes.image.deleteById });
  }

  end(res, null, true);
}
