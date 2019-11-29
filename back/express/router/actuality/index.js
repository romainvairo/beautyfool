const { app } = require('../../../config/server');
const getActualities = require('./getActualities');
const addActuality = require('./addActuality');
const getActualityById = require('./getActualityById');
const editActualityById = require('./editActualityById');
const deleteActualityById = require('./deleteActualityById');

app.get('/api/Actualities', getActualities);
app.post('/api/Actualities/add', addActuality);
app.get('/api/Actualities/:id', getActualityById);
app.put('/api/Actualities/:id/edit', editActualityById);
app.delete('/api/Actualities/:id/delete', deleteActualityById);
