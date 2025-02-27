const { app } = require('../../../config/server');
const getServices = require('./getServices');
const addService = require('./addService');
const getServiceById = require('./getServiceById');
const editServiceById = require('./editServiceById');
const deleteServiceById = require('./deleteServiceById');
const getServicesByCategorySlug = require('./getServicesByCategorySlug');

app.get('/api/services/category/:category_slug', getServicesByCategorySlug);
app.get('/api/services/page/:page', getServices);
app.post('/api/services/add', addService);
app.get('/api/services/:id', getServiceById);
app.put('/api/services/:id/edit', editServiceById);
app.delete('/api/services/:id/delete', deleteServiceById);
