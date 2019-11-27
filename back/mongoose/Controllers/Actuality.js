const { ActualityModel } = require('../Models/Actuality');

const ActualityController = {
    add: actuality => {
        return new ActualityModel(actuality).save();
    },

};

module.exports = ActualityController;
