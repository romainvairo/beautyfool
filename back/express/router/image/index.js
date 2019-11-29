const { app } = require('../../../config/server');
const getImages = require('./getImages');
const addImage = require('./addImage');
const getImageById = require('./getImageById');
const editImageById = require('./editImageById');
const deleteImageById = require('./deleteImageById');

app.get('/api/Images', getImages);
app.post('/api/Images/add', addImage);
app.get('/api/Images/:id', getImageById);
app.put('/api/Images/:id/edit', editImageById);
app.delete('/api/Images/:id/delete', deleteImageById);
