const { app } = require('../../../config/server');
const getRoles = require('./getRoles');

app.get('/api/roles', getRoles);
