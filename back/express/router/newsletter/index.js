const { app } = require('../../../config/server');
const sendNewsletter = require('./sendNewsletter');

app.post('/api/newsletter/send', sendNewsletter);
