import React from 'react';

import GalleryCarousel from './GalleryCarousel';
import FeedbacksCarousel from './FeedbacksCarousel';
import CategoriesCarousel from './CategoriesCarousel';
// import AccessMap from './AccessMap';

import './Home.scss';

const HomeView = ({ translations })  => (

  <section className="Home">
    <GalleryCarousel />
    <div className="Home-MostRecentNews">
    </div>
    <CategoriesCarousel />
    <FeedbacksCarousel />
    {/* <AccessMap /> */}
    <div className="Home-ContactInformation">
      <p className="Home-ContactInformation-Subsections">{ translations.contactInformation.address }</p>
      <p className="Home-ContactInformation-Subsections">{ translations.contactInformation.zipcode }</p>
      <p className="Home-ContactInformation-Subsections">{ translations.contactInformation.city }</p>
      <p className="Home-ContactInformation-Subsections">{ translations.contactInformation.phone }</p>
    </div>
  </section>

);

export default HomeView;
