const { app } = require('../../../config/server');
const getComments = require('./getComments');
const addComment = require('./addComment');
const getCommentById = require('./getCommentById');
const editCommentById = require('./editCommentById');
const deleteCommentById = require('./deleteCommentById');

app.get('/api/Comments', getComments);
app.post('/api/Comments/add', addComment);
app.get('/api/Comments/:id', getCommentById);
app.put('/api/Comments/:id/edit', editCommentById);
app.delete('/api/Comments/:id/delete', deleteCommentById);
