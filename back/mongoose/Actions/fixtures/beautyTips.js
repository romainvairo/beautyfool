const { BeautyTipController } = require('../../Controllers');
const { beautyTips } = require('./data');

module.exports = () => Promise.all(beautyTips.map(BeautyTipController.add));
