const helmet = require('helmet');

const { app } = require('../../config/server');

app.use(helmet());
