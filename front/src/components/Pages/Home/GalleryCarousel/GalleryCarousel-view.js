import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './GalleryCarousel.scss';

const GalleryCarouselView = ({ images, translations })  => (

  <section className="GalleryCarousel">
    <AliceCarousel>
      {images.map((image, i) => (

        <section className="GalleryCarousel-Subsection">
          <img className="GalleryCarousel-Images" key={image} src={image} alt="" />
          <p className="GalleryCarousel-Paragraph">{translations[i]}</p>
        </section>

      ))}
    </AliceCarousel>
  </section>

);

export default GalleryCarouselView;
