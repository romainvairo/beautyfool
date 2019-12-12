const {CategoryController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
 let category;

 try {
   category = await CategoryController.findById(req.body.id);
 }  catch (error) {
    return end(res, { error: errorCodes.category.findById });
 }

 end(res, { data: category }, true);
}
