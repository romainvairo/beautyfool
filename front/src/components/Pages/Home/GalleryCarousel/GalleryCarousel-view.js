import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const GalleryCarouselView = ({ images })  => (

  <section>
    <AliceCarousel>
      {images.map(image => (
        <img key={image} src={image} alt="" />
      ))}
    </AliceCarousel>
  </section>

);

export default GalleryCarouselView;
