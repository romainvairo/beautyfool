import React from 'react';

import GalleryCarousel from './GalleryCarousel';
import FeedbacksCarousel from './FeedbacksCarousel';
// import AccessMap from './AccessMap';

import './Home.scss';

const HomeView = ({ translations })  => (

  <section className="Home">
    <GalleryCarousel />
    <div className="Home-MostRecentNews">
      <img src={require('../../../assets/images/makeup_1.jpg')} alt=""/>
    </div>
    <FeedbacksCarousel />
    {/* <AccessMap /> */}
    <div>
      <img className="Home-Map" src={require('../../../assets/images/map.jpg')} alt=""/>
    </div>
    <div className="Home-ContactInformation">
      <p className="Home-ContactInformation-Subsections">{ translations.contactInformation.address }</p>
      <p className="Home-ContactInformation-Subsections">{ translations.contactInformation.zipcode }</p>
      <p className="Home-ContactInformation-Subsections">{ translations.contactInformation.city }</p>
      <p className="Home-ContactInformation-Subsections">{ translations.contactInformation.phone }</p>
    </div>
  </section>

);

export default HomeView;
