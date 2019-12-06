import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './FeedbacksCarousel.scss';
import Stars from './Stars';

const FeedbacksCarouselView = ({ translations, feedbacks })  => (

  <section className="FeedbacksCarousel">
    <AliceCarousel autoPlay={true} autoPlayInterval={5000} buttonsDisabled={true}>
      {feedbacks.map(( feedback ) => (
        <div key={feedback._id} className="FeedbacksCarousel-Feedback">
          <p>{feedback.user.username}</p>
          <p>{feedback.service.name}</p>
          <div className="stars">
          <Stars rate={feedback.rate} />
          </div>
          <p>{feedback.rate}</p>
          <p>{feedback.text}</p>
        </div>
      ))}
    </AliceCarousel>
  </section>

);

export default FeedbacksCarouselView;
