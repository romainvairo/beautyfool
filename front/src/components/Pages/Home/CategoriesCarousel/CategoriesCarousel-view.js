import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './CategoriesCarousel.scss';

const CategoriesCarouselView = ({ images })  => (

  <section className="CategoriesCarousel">
    <AliceCarousel>
      {images.map(image => (

        <section className="CategoriesCarousel-Subsection">
          <img className="CategoriesCarousel-Images" key={image} src={image} alt="" />
          <p className="CategoriesCarousel-Paragraph">CategoriesCarousel</p>
        </section>
      ))}
    </AliceCarousel>
  </section>

);

export default CategoriesCarouselView;
