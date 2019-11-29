import React from 'react';

import GalleryCarousel from './GalleryCarousel';
import FeedbacksCarousel from './FeedbacksCarousel';
import CategoriesCarousel from './CategoriesCarousel';
// import AccessMap from './AccessMap';

const HomeView = ({ translations })  => (
  
  <section>
    <GalleryCarousel />
    <div className="mostRecentNews">
    </div>
    <CategoriesCarousel />
    <FeedbacksCarousel />
    <div className="contactInformation">
      { translations.contactInformation.phone }
      { translations.contactInformation.address }
      { translations.contactInformation.zipcode }
      { translations.contactInformation.city }
    </div>
  </section>

);

export default HomeView;