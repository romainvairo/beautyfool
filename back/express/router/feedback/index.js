const { app } = require('../../../config/server');
const getFeedbacks = require('./getFeedbacks');
const addFeedback = require('./addFeedback');
const getFeedbackById = require('./getFeedbackById');
const editFeedbackById = require('./editFeedbackById');
const deleteFeedbackById = require('./deleteFeedbackById');

app.get('/api/feedbacks/:page', getFeedbacks);
app.post('/api/feedbacks/add', addFeedback);
app.get('/api/feedbacks/:id', getFeedbackById);
app.put('/api/feedbacks/:id/edit', editFeedbackById);
app.delete('/api/feedbacks/:id/delete', deleteFeedbackById);
