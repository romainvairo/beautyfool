import React from 'react';

import './Gallery.scss';

const GalleryView = ({ images, translations })  => (

  <section className="GalleryCarousel">
      {images.map((image, i) => (

        <section className="Gallery-Subsection">
          <img className="Gallery-Images" key={image} src={image} alt="" />
          <p className="Gallery-Paragraph">{translations[i]}</p>
        </section>

      ))}
  </section>

);

export default GalleryView;
