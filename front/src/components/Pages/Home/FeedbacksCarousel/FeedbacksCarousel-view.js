import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './FeedbacksCarousel.scss';
import Stars from './Stars';

const FeedbacksCarouselView = ({ translations, feedbacks })  => (

  <section className="FeedbacksCarousel">
    <AliceCarousel autoPlay={true} autoPlayInterval={5000} buttonsDisabled={true} dotsDisabled={true}>
      {feedbacks.map(( feedback ) => (
        <div key={feedback._id} className="FeedbacksCarousel-Feedback mt-12 mb-12">
          <p className="FeedbacksCarousel-UserName">{feedback.user ? feedback.user.username || 'Utilisateur supprimé' : 'Utilisateur supprimé'}</p>
          <p className="FeedbacksCarousel-ServiceName">{feedback.service.name}</p>
          <div className="stars">
          <Stars rate={feedback.rate} />
          </div>
          <p>{feedback.text}</p>
        </div>
      ))}
    </AliceCarousel>
  </section>

);

export default FeedbacksCarouselView;
