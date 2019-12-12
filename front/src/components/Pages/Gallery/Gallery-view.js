import React from 'react';

import './Gallery.scss';

const GalleryView = ({ images, translations })  => (
<<<<<<< HEAD

  <section className="Gallery">
    {images.map(( image ) => (

      <section className="Gallery-Subsection">
        <img className="Gallery-Images" key={image} src={image} alt="" />
      </section>

=======
  <section className="GalleryCarousel">
    {images.map((image, i) => (
      <section className="Gallery-Subsection">
        <img className="Gallery-Images" key={image} src={image} alt="" />
        <p className="Gallery-Paragraph">{translations[i]}</p>
      </section>
>>>>>>> jeremy
    ))}
  </section>
);

export default GalleryView;
