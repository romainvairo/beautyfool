import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './ProfileCarousel.scss';


const ProfileCarouselView = ({ images, translations })  => (

  <section className="ProfileCarousel carousel">
    <AliceCarousel autoPlay={true} autoPlayInterval={5000} buttonsDisabled={true}>
      {images.map((image, i) => (

        <section className="ProfileCarousel-Subsection">
          <img className="ProfileCarousel-Images" key={image} src={image} alt="" />
          <p className="ProfileCarousel-Paragraph">{translations[i]}</p>
        </section>

      ))}
    </AliceCarousel>
  </section>

);

export default ProfileCarouselView;
