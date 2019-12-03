import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './FeedbacksCarousel.scss';

const FeedbacksCarouselView = ({ images })  => (

  <section className="FeedbacksCarousel">
    <AliceCarousel>
      {images.map(image => (

        <section className="FeedbacksCarousel-Subsection">
          <img className="FeedbacksCarousel-Images" key={image} src={image} alt="" />
          <p className="FeedbacksCarousel-Paragraph">FeedbacksCarousel</p>
        </section>
      ))}
    </AliceCarousel>
  </section>

);

export default FeedbacksCarouselView;
