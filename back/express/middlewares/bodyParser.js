const bodyParser = require('body-parser');

const { app } = require('../../config/server');

app.use(bodyParser.json());
