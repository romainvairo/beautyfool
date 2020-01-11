const bodyParser = require('body-parser');

const { app } = require('../../config/server');

/* app.use(bodyParser.json()); */
// Augmentation de la limite de taille des données envoyer
app.use(bodyParser.json({limit: '50mb'}));
