import React from 'react';

import './Gallery.scss';

const GalleryView = ({ images, translations })  => (

  <section className="Gallery">
    {images.map(( image ) => (

      <section className="Gallery-Subsection">
        <img className="Gallery-Images" key={image} src={image} alt="" />
      </section>

    ))}
  </section>
);

export default GalleryView;
