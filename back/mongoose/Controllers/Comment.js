const { CommentModel } = require('../Models/Comment');

const CommentController = {
    add: comment => {
        return new CommentModel(comment).save();
    },
};

module.exports = CommentController;
