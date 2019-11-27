const { ImageController } = require('../../Controllers');
const { images } = require('./data');

//module.exports
module.exports = () => Promise.all(images.map(ImageController.add));
