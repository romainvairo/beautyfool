import React from 'react';

const AsyncComponentView = ({ chooseRendering }) => (
  <div>
    {chooseRendering()}
  </div>
);

export default AsyncComponentView;
