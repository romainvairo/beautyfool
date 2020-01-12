const { UserController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');
const { fileWriter } = require('../../../services');

module.exports = async (req, res) => {
  const { picture, pictureName, ...userData } = req.body;

  try {
    if (picture) {
      const pictureObject = {
        type: 'picture',
        buffer: picture,
        fileName: pictureName,
      };

      const fileData = await fileWriter(pictureObject);

      // Petit correction sur l'url sauvegarder dans l'utilisateur, ajout du nom de domaine
      // A changer une fois en prod
      userData.picture = 'http://localhost:8000' + fileData.fileUri.replace(/\\+/, '/');
    };

    await UserController.editById(req.params.id, userData);
  } catch (error) {
    console.error(error);
    return end(res, { error: errorCodes.user.editById });
  }

  // Ajout des données modifiés au retour pour pouvoir set le state de reducer client
  end(res, userData, true);
}
