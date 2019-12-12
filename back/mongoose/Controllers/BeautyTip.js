const { BeautyTipModel } = require('../Models/BeautyTip');
const { hash } = require('../../utils');
const { BaseError, errorCodes } = require('../../Errors');

const limitByPage = 20;

const BeautyTipController = {
  /**
   * add a beauty tip into the collection
   * @param {Object} beautyTip
   * @returns {Promise}
   */
  add: beautyTip => {
    return new BeautyTipModel(beautyTip).save();
  },

  /**
   * find an actuality by its id
   * @param {String} id
   */
  findById: (id) => {
    return BeautyTipModel.findById(id);
  },

  /**
   * find newest beauty tip
   */
  findNewestBeautyTip: () => {
    return BeautyTipModel.findOne().sort({ _id: -1 });
  },

  /**
   * find all beautyTips
   * @param {Number} page
   */
  findBeautyTips: (page) => {
    return BeautyTipModel
      .find()
      .skip((page - 1) * limitByPage)
      .limit(limitByPage);
  },

  /**
   * edit beautyTip by its id
   * @param {String} id
   * @param {Object} beautyTip
   */
  editById: (id, beautyTip) => {
    return BeautyTipModel.findByIdAndUpdate(id, beautyTip);
  },

  /**
   * delete beautyTip by its id
   * @param {String} id
   */
  deleteById: id => {
    return BeautyTipModel.findByIdAndDelete(id);
  }
};

module.exports = BeautyTipController;
