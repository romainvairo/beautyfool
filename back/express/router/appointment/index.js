const { app } = require('../../../config/server');

const getAppointments = require('./getAppointments');
const addAppointment = require('./addAppointment');
const getAppointmentById = require('./getAppointmentById');
const editAppointmentById = require('./editAppointmentById');
const deleteAppointmentById = require('./deleteAppointmentById');
const getAppointmentsByUserId = require('./getAppointmentsByUserId');

app.get('/api/appointments/user/:user_id', getAppointmentsByUserId);
app.get('/api/appointments', getAppointments);
app.post('/api/appointments/add', addAppointment);
app.get('/api/appointments/:id', getAppointmentById);
app.put('/api/appointments/:id/edit', editAppointmentById);
app.delete('/api/appointments/:id/delete', deleteAppointmentById);
