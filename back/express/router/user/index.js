const { app } = require('../../../config/server');
const signupHandler = require('./signup');
const loginHandler = require('./login');
const getUsers = require('./getUsers');
const getUserById = require('./getUserById');
const editUserById = require('./editUserById');
const deleteUserById = require('./deleteUserById');
const confirmationEmail = require('./confirmationEmail');
const setNewsletterSubscription = require('./setNewsletterSubscription');

app.post('/api/signup', signupHandler);
app.post('/api/login', loginHandler);

app.post('/api/users/:id/newsletter-subscription/set', setNewsletterSubscription)
app.get('/api/users/:id/email/confirm', confirmationEmail);
app.get('/api/users/page/:page', getUsers);
app.get('/api/users/:id', getUserById);
app.post('/api/users/:id/edit', editUserById);
app.delete('/api/users/:id/delete', deleteUserById);
