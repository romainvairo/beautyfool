import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const HomeView = ({ images })  => (
  
  <section>
    <AliceCarousel>
      {images.map(image => (
        <img src={image} />
      ))}
    </AliceCarousel>
  </section>

);

export default HomeView;