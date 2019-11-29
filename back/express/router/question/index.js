const { app } = require('../../../config/server');
const getQuestions = require('./getQuestions');
const addQuestion = require('./addQuestion');
const getQuestionById = require('./getQuestionById');
const editQuestionById = require('./editQuestionById');
const deleteQuestionById = require('./deleteQuestionById');

app.get('/api/Questions', getQuestions);
app.post('/api/Questions/add', addQuestion);
app.get('/api/Questions/:id', getQuestionById);
app.put('/api/Questions/:id/edit', editQuestionById);
app.delete('/api/Questions/:id/delete', deleteQuestionById);
