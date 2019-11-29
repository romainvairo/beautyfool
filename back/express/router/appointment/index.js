const { app } = require('../../../config/server');

const getAppointments = require('./getAppointments');
const addAppointment = require('./addAppointment');
const getAppointmentById = require('./getAppointmentById');
const editAppointmentById = require('./editAppointmentById');
const deleteAppointmentById = require('./deleteAppointmentById');

app.get('/api/Appointments', getAppointments);
app.post('/api/Appointments/add', addAppointment);
app.get('/api/Appointments/:id', getAppointmentById);
app.put('/api/Appointments/:id/edit', editAppointmentById);
app.delete('/api/Appointments/:id/delete', deleteAppointmentById);
