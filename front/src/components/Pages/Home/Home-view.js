import React from 'react';

import GalleryCarousel from './GalleryCarousel';
import FeedbacksCarousel from './FeedbacksCarousel';
// import AccessMap from './AccessMap';

import './Home.scss';

const HomeView = ({ translations, actuality })  => (

  <section className="Home">
    <GalleryCarousel />
    <div className="Home-Divs">
      <div className="Divs-Row_1">
        <div className="Home-News Row_1">
          <img src={require('../../../assets/images/makeup_1.jpg')} alt=""/>
          <p>{actuality}</p>
        </div>
        <div className="Home-Benefits Row_1">
          <img src={require('../../../assets/images/makeup_2.jpg')} alt=""/>
        </div>
      </div>
      <div className="Divs-Row_2">
        <div className="Home-Presentation Row_2">
          <img src={require('../../../assets/images/makeup_3.jpg')} alt=""/>
        </div>
        <div className="Home-Galery Row_2">
          <img src={require('../../../assets/images/makeup_4.jpg')} alt=""/>
        </div>
        <div className="Home-BeautyTips Row_2">
          <img src={require('../../../assets/images/makeup_5.jpg')} alt=""/>
        </div>
      </div>
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
