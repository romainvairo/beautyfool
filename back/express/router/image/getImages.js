const { ImageController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
  let images;

  try {
    images = await ImageController.findAll(req.params.page);
  } catch (error) {
    return end(res, { error: errorCodes.image.findAll });
  }

  end(res, { data: images }, true);
}
