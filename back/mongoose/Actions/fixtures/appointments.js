const { AppointmentController, ServiceController, UserController } = require('../../Controllers');
const { appointments } = require('./data');

module.exports = () => {
  // map the appointments to get the services' id
  // and create a multiple appointments
  return Promise.all(appointments.map(async appointment => {
    const servicesRequests = appointment.services.map(ServiceController.findByName);
    appointment.services = (await Promise.all(servicesRequests)).filter(s => s).map(s => s._id);
    appointment.customer = (await UserController.findByName(appointment.customer))._id;

    return AppointmentController.add(appointment);
  }));
}
