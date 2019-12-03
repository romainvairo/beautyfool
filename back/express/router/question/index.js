const { app } = require('../../../config/server');
const getQuestions = require('./getQuestions');
const addQuestion = require('./addQuestion');
const getQuestionById = require('./getQuestionById');
const editQuestionById = require('./editQuestionById');
const deleteQuestionById = require('./deleteQuestionById');

app.get('/api/questions/page/:page', getQuestions);
app.post('/api/questions/add', addQuestion);
app.get('/api/questions/:id', getQuestionById);
app.put('/api/questions/:id/edit', editQuestionById);
app.delete('/api/questions/:id/delete', deleteQuestionById);
