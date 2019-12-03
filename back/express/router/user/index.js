const { app } = require('../../../config/server');
const signupHandler = require('./signup');
const loginHandler = require('./login');
const getUsers = require('./getUsers');
const getUserById = require('./getUserById');
const editUserById = require('./editUserById');
const deleteUserById = require('./deleteUserById');

app.post('/api/signup', signupHandler);
app.post('/api/login', loginHandler);

app.get('/api/users/page/:page', getUsers);
app.get('/api/users/:id', getUserById);
app.put('/api/users/:id/edit', editUserById);
app.delete('/api/users/:id/delete', deleteUserById);
