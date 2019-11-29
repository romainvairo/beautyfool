const { ImageModel } = require('../Models/Image');
const { hash } = require('../../utils');
const { BaseError, errorCodes } = require('../../Errors');

const limitByPage = 20;

const ImageController = {
  /**
   * add an image into the collection
   * @param {Object} image
   * @returns {Promise}
   */
	add: image => {
		return new ImageModel(image).save();
  },

  /**
   * find an actuality by its id
   * @param {String} id
   */
  findById: (id) => {
    return ImageModel.findById(id);
  },

  /**
   * find all images by its id
   * @param {Number} page
   */
  findImages: (page) => {
    return ImageModel
      .find()
      .skip((page - 1) * limitByPage)
      .limit(limitByPage);
  },

  /**
   * edit an image by its id
   * @param {String} id
   * @param {Object} image
   */
  editById: (id, image) => {
    return ImageModel.findByIdAndUpdate(id, image);
  },

  /**
   * delete an image by its id
   * @param {String} id
   */
  deleteById: id => {
    return ImageModel.findByIdAndDelete(id);
  }
};

module.exports = ImageController;
