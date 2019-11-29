const { CommentController, UserController, FeedbackController } = require('../../Controllers');
const { comments } = require('./data');

module.exports = () => {
  return Promise.all(comments.map(async comment => {
    comment.user = (await UserController.findByName(comment.user))._id;
    const feedback = await FeedbackController.findByRate(comment.feedback);

    comment.feedback = feedback._id;

    const commentDoc = await CommentController.add(comment);

    await FeedbackController.addComment(feedback._id, commentDoc._id);
    return commentDoc;
  }));
}
