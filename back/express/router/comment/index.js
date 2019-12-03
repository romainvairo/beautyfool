const { app } = require('../../../config/server');
const getComments = require('./getComments');
const addComment = require('./addComment');
const getCommentById = require('./getCommentById');
const editCommentById = require('./editCommentById');
const deleteCommentById = require('./deleteCommentById');

app.get('/api/comments/page/:page', getComments);
app.post('/api/comments/add', addComment);
app.get('/api/comments/:id', getCommentById);
app.put('/api/comments/:id/edit', editCommentById);
app.delete('/api/comments/:id/delete', deleteCommentById);
