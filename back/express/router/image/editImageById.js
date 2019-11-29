const { ImageController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  const { id, ...image } = req.body;

  try {
    await ImageController.editById(id, image);
  } catch (error) {
    return end(res, { error: errorCodes.image.editById });
  }

  end(res, null, true);
}
