const moment = require('moment');

const { AppointmentController, UserController, ServiceController } = require('../../../mongoose/Controllers');
const { errorCodes } = require('../../../Errors');
const { end } = require('../../../utils');
const { emailer } = require('../../../services');

module.exports = async (req, res) => {
  const { customer, date, services: serviceIds } = req.body;

  try {
    await AppointmentController.add(req.body);
    const user = await UserController.findById(customer);
    const services = await ServiceController.findAllById(serviceIds);

    let totalPrice = 0;
    let totalDuration = 0;

    services.forEach(service => {
      totalPrice += service.price;
      totalDuration += new Date(service.duration).getTime();
    });

    await emailer({
      from: 'user',
      replyTo: 'no-reply',
      subject: 'New appointment',
      to: user.email,
      message: (
        'You have taken an appointment on ' +
        moment(date).format('LLLL') +
        ' with ' +
        services.length +
        ' services for a total of:' +
        '<br/>' +
        'price: ' + totalPrice + ' € ' +
        '<br/>' +
        'duration: ' + moment(totalDuration).format('H[h]mm') +
        '<br/>' +
        '<br/>' +
        'List of services:' +
        services.map(s => (
          'name: ' + s.name +
          '<br/>' +
          'category: ' + s.category.name +
          '<br/>' +
          'price: ' + s.price + ' €' +
          'duration: ' + moment(s.duration).format('H[h]mm')
        )).join('<br/><br/>')
      ),
    });
  } catch (error) {
    console.error(error);
    return end(res, { error: errorCodes.appointment.add });
  }

  end(res, null, true);
}
