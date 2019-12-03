const { app } = require('../../../config/server');
const getImages = require('./getImages');
const addImage = require('./addImage');
const getImageById = require('./getImageById');
const editImageById = require('./editImageById');
const deleteImageById = require('./deleteImageById');

app.get('/api/images/page/:page', getImages);
app.post('/api/images/add', addImage);
app.get('/api/images/:id', getImageById);
app.put('/api/images/:id/edit', editImageById);
app.delete('/api/images/:id/delete', deleteImageById);
