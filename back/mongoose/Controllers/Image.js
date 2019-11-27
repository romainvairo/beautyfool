const { ImageModel } = require('../Models/Image');

const ImageController = {
    add: image => {
        return new ImageModel(image).save();
    },

};

module.exports = ImageController;
