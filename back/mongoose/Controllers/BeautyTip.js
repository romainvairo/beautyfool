const { BeautyTipModel } = require('../Models/BeautyTip');

const BeautyTipController = {
    add: beautyTip => {
        return new BeautyTipModel(beautyTip).save();
    },

};

module.exports = BeautyTipController;
