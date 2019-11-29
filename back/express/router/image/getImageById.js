const { ImageController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  let image;

  try {
    image = await ImageController.findById(req.body.id);
  } catch (error) {
    return end(res, { error: errorCodes.image.findById });
  }

  end(res, { data: image }, true);
}
