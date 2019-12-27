const { app } = require('../../../config/server');
const getActualities = require('./getActualities');
const addActuality = require('./addActuality');
const getActualityById = require('./getActualityById');
const editActualityById = require('./editActualityById');
const deleteActualityById = require('./deleteActualityById');
const getNewestActuality = require('./getNewestActuality');
const getActualitiesCount = require('./getActualitiesCount');

app.get('/api/actualities/count', getActualitiesCount);
app.get('/api/actualities/newest', getNewestActuality);
app.get('/api/actualities/page/:page', getActualities);
app.post('/api/actualities/add', addActuality);
app.get('/api/actualities/:id', getActualityById);
app.put('/api/actualities/:id/edit', editActualityById);
app.delete('/api/actualities/:id/delete', deleteActualityById);
