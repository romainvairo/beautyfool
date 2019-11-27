const { QuestionModel } = require('../Models/Question');

const QuestionController = {
  // add a question to the collection
  add: question => {
    return new QuestionModel(question).save();
  },
};

module.exports = QuestionController;
