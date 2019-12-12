import React from 'react';

import Star from './Star';

const StarsView = ({ getSingleValue }) => (
  <span className="text-center">
    <Star value={getSingleValue()} />
    <Star value={getSingleValue()} />
    <Star value={getSingleValue()} />
    <Star value={getSingleValue()} />
    <Star value={getSingleValue()} />
  </span>
);

export default StarsView;
