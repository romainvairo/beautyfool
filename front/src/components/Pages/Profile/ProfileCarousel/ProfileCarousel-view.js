import React from 'react';
import moment from 'moment';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './ProfileCarousel.scss';

const ProfileCarouselView = ({ appointments })  => {
  // Force le carousel a ce recharger
  window.dispatchEvent(new Event('resize'));
  return (
    <section className="ProfileCarousel carousel">
      <AliceCarousel buttonsDisabled={true}>
        {appointments.map((appointment) => (
          <section key={appointment} className="ProfileCarousel-Subsection bg-gray-300 h-64">
            {/* <img className="ProfileCarousel-Images" src={appointment.services[0].category.name} alt="carousel" /> */}
            <p className="ProfileCarousel-Paragraph">
              {moment(appointment.date).format('LLLL')}
              {/* <br />
              Prix: {appointment.services.map(s => s.price).reduce((val, acc) => val + acc)} € */}
            </p>
          </section>
        ))}
      </AliceCarousel>
    </section>
  );
}

export default ProfileCarouselView;
