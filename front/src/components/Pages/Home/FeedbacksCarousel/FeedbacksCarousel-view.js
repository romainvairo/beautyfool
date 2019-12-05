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
          <p key={feedback.user}>{feedback.user}</p>
          <p key={feedback.service}>{feedback.service}</p>
          <div className="stars">
          <Stars rate={feedback.rate} />
          </div>
          <p key={feedback.rate}>{feedback.rate}</p>
          <p key={feedback.text}>{feedback.text}</p>
        </div>
      ))}
    </AliceCarousel>
  </section>

);

export default FeedbacksCarouselView;
