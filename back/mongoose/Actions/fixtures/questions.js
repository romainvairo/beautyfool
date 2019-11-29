const { QuestionController } = require('../../Controllers');
const { questions } = require('./data');

// execute all promises made out of questions data
module.exports = () => Promise.all(questions.map(QuestionController.add));
