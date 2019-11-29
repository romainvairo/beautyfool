const { app } = require('../../../config/server');
const getSchedules = require('./getSchedules');
const addSchedule = require('./addSchedule');
const getScheduleById = require('./getScheduleById');
const editScheduleById = require('./editScheduleById');
const deleteScheduleById = require('./deleteScheduleById');

app.get('/api/Schedules', getSchedules);
app.post('/api/Schedules/add', addSchedule);
app.get('/api/Schedules/:id', getScheduleById);
app.put('/api/Schedules/:id/edit', editScheduleById);
app.delete('/api/Schedules/:id/delete', deleteScheduleById);
