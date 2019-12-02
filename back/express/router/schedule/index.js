const { app } = require('../../../config/server');
const getSchedules = require('./getSchedules');
const addSchedule = require('./addSchedule');
const getScheduleById = require('./getScheduleById');
const editScheduleById = require('./editScheduleById');
const deleteScheduleById = require('./deleteScheduleById');

app.get('/api/schedules/:page', getSchedules);
app.post('/api/schedules/add', addSchedule);
app.get('/api/schedules/:id', getScheduleById);
app.put('/api/schedules/:id/edit', editScheduleById);
app.delete('/api/schedules/:id/delete', deleteScheduleById);
