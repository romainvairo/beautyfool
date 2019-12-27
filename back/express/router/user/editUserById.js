const { UserController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');
const { fileWriter } = require('../../../services');

module.exports = async (req, res) => {
  const { picture, pictureName, ...userData } = req.body;

  try {
    const pictureObject = {
      type: 'picture',
      buffer: picture,
      fileName: pictureName,
    };

    const fileData = await fileWriter(pictureObject);

    userData.picture = fileData.fileUri.replace(/\\+/, '/');

    await UserController.editById(req.params.id, userData);
  } catch (error) {
    console.error(error);
    return end(res, { error: errorCodes.user.editById });
  }

  end(res, null, true);
}
