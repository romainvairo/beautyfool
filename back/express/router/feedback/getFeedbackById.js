const { FeedbackController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');

module.exports = async (req, res) => {
 let feedback;

 try {
   feedback = await FeedbackController.findById(req.body.id);
 }  catch (error) {
    return end(res, { error: errorCodes.feedback.findById });
 }

 end(res, { data: feedback }, true);
}
