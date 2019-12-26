import React from 'react';
import moment from 'moment';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './ProfileCarousel.scss';

const ProfileCarouselView = ({ appointments })  => (
  <section className="ProfileCarousel carousel">
    <AliceCarousel autoPlay={true} autoPlayInterval={5000} buttonsDisabled={true}>
      {appointments.map((appointment) => (
        <section key={appointment} className="ProfileCarousel-Subsection">
          <img className="ProfileCarousel-Images" src={appointment.services[0].category.name} alt="carousel" />
          <p className="ProfileCarousel-Paragraph">
            Start at: {moment(appointment.date).format('LLLL')}
            <br />
            Price: {appointment.services.map(s => s.price).reduce((val, acc) => val + acc)} €
          </p>
        </section>
      ))}
    </AliceCarousel>
  </section>
);

export default ProfileCarouselView;
