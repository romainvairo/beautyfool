const { app } = require('../../../config/server');
const getFeedbacks = require('./getFeedbacks');
const addFeedback = require('./addFeedback');
const getFeedbackById = require('./getFeedbackById');
const editFeedbackById = require('./editFeedbackById');
const deleteFeedbackById = require('./deleteFeedbackById');

app.get('/api/Feedbacks', getFeedbacks);
app.post('/api/Feedbacks/add', addFeedback);
app.get('/api/Feedbacks/:id', getFeedbackById);
app.put('/api/Feedbacks/:id/edit', editFeedbackById);
app.delete('/api/Feedbacks/:id/delete', deleteFeedbackById);
