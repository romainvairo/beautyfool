import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import moment from 'moment';

import './Benefits.scss';

const BenefitsView = ({ translations, categories }) => (
  <div className="Benefits">
    {categories.map((category) => (
      <div className="benefis-section">
        <div className="benefits-section-image">
          <img src={category.image} alt=""/>
        </div>
        <div className="benefits-section-form">
          <h1 className="benefits-section-title">{category.name}</h1>
          {category.services.map((service) => (
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    value=""
                  />
                }
                label={service.name}
                className="benefits-section-label"
              />
              <h2 className="benefits-section-price">{translations.price}: {service.price} €</h2>
              <h2 className="benefits-section-duration">{translations.duration}: {moment(service.duration).minute()} minutes</h2>
            </div>
          ))}
        </div>
      </div>
    ))}
    <div className="benefits-button">
      <Button variant="contained" color="secondary" className="font-bold" href="/">
        {translations.button}
      </Button>
    </div>
  </div>
);

export default BenefitsView;
