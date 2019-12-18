import React from 'react';
import QS from 'uqs';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import './Benefits.scss';
import Checkbox from '../../Shared/Checkbox/Checkbox-view';
import { correctFormatDate } from '../../../utils';

const BenefitsView = ({
  translations,
  categories,
  onChange,
  isServiceChoosen,
  totalPrice,
  totalDuration,
}) => (
  <div className="benefits">
    {categories.map((category) => (
      <div key={category._id} className="benefits-section">
        <div className="benefits-section-form">
          <h1 className="benefits-section-title">{category.name}</h1>
          {category.services.map((service) => (
            <div key={service._id}>
              <Checkbox
                value=""
                onChange={onChange(service)}
                checked={isServiceChoosen(service)}
                label={service.name}
                name={service.name}
                className="benefits-section-label"
              />
              <h2 className="benefits-section-price">{translations.price}{service.price} €</h2>
              <h2 className="benefits-section-duration">{translations.duration}{correctFormatDate(service.duration)}</h2>
            </div>
          ))}
        </div>
        <div className="benefits-section-image">
          <img src={require('../../../assets/images/makeup_1.jpg')} alt=""/>
        </div>
      </div>
    ))}
    <div className="benefits-total">
      {translations.totalPrice}{totalPrice} €
      <br/>
      {translations.totalDuration}{totalDuration}
    </div>
    <div className="benefits-button">
      <Button
        component={Link}
        variant="contained"
        color="secondary"
        className="font-bold"
        // Add after calendar the parameters `totalPrice` and `totalDuration` into the URL
        to={'/calendar?' + QS.stringify({ price: totalPrice + ' €', duration: totalDuration })}
      >
        {translations.button}
      </Button>
    </div>
  </div>
);

export default BenefitsView;
