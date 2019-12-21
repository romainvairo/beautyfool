import React from 'react';

const AppointmentTooltipView = ({ appointment }) => {
  console.log(appointment);
  return !appointment._id
    ? null
    : (
      <div>
        <p>Customer: {appointment.customer.username}</p>
        <ul>Services: {appointment.services.map(service => (
          <li>
            {service.name} ({service.category.name})
          </li>
        ))}</ul>
        <p>Price: {appointment.services.reduce((acc, val) => acc + val)}</p>
      </div>
    );
}

export default AppointmentTooltipView;
