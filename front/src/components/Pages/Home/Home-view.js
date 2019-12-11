import React from 'react';

import GalleryCarousel from './GalleryCarousel';
import FeedbacksCarousel from './FeedbacksCarousel';
// import AccessMap from './AccessMap';

import './Home.scss';

const HomeView = ({ translations, actuality, beautyTip })  => (

  <section className="Home">
    <GalleryCarousel />
    <div className="Home-Divs">
      <div className="Divs-Row_1">
        <div className="Home-News Row_1">
          <a href="/actualités">
            <img src={require('../../../assets/images/makeup_1.jpg')} alt=""/>
            <h1>{actuality.title}</h1>
            <p className="Home-News-Paragraph">{actuality.content}</p>
            <p className="Home-News-Link">{translations.news.link}</p>
          </a>
        </div>
        <div className="Home-Benefits Row_1">
          <a href="/prestations">
            <img src={require('../../../assets/images/makeup_2.jpg')} alt=""/>
            <h1>{translations.benefits.title}</h1>
            <p className="Home-Benefits-Paragraph">{translations.benefits.text}</p>
            <p className="Home-Benefits-Link">{translations.benefits.link}</p>
          </a>
        </div>
      </div>
      <div className="Divs-Row_2">
        <div className="Home-Presentation Row_2">
          <a href="/presentation">
            <img src={require('../../../assets/images/makeup_3.jpg')} alt=""/>
            <h1>{translations.presentation.title}</h1>
            <p className="Home-Presentation-Paragraph">{translations.presentation.text}</p>
            <p className="Home-Presentation-Link">{translations.presentation.link}</p>
          </a>
        </div>
        <div className="Home-Gallery Row_2">
          <a href="/galerie">
            <img src={require('../../../assets/images/makeup_4.jpg')} alt=""/>
            <h1>{translations.gallery.title}</h1>
            <p className="Home-Gallery-Link">{translations.gallery.link}</p>
          </a>
        </div>
        <div className="Home-BeautyTips Row_2">
          <a href="/astuces-beaute">
            <img src={require('../../../assets/images/makeup_5.jpg')} alt=""/>
            <h1>{beautyTip.title}</h1>
            <p className="Home-BeautyTips-Paragraph">{beautyTip.content}</p>
            <p className="Home-BeautyTips-Link">{translations.beautyTips.link}</p>
          </a>
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
