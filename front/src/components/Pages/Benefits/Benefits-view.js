import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import './Benefits.scss';
const BenefitsView = ({ translations }) => (
  <div className="Benefits">
    <div className="Benefits-HairRemoval">
      <div className="Benefits-HairRemoval-Image">

      </div>
      <div className="Benefits-HairRemoval-Form">
        <FormControlLabel
          control={
            <Checkbox
              value="checkedA" />
          }
          label="Secondary"
        />
        <FormControlLabel
          control={
            <Checkbox
              value="checkedA" />
          }
          label="Secondary"
        />
        <FormControlLabel
          control={
            <Checkbox
              value="checkedA" />
          }
          label="Secondary"
        />
        <FormControlLabel
          control={
            <Checkbox
              value="checkedA" />
          }
          label="Secondary"
        />
        <FormControlLabel
          control={
            <Checkbox
              value="checkedA" />
          }
          label="Secondary"
        />
        <FormControlLabel
          control={
            <Checkbox
              value="checkedA" />
          }
          label="Secondary"
        />
        <FormControlLabel
          control={
            <Checkbox
              value="checkedA" />
          }
          label="Secondary"
        />
        <FormControlLabel
          control={
            <Checkbox
              value="checkedA" />
          }
          label="Secondary"
        />
      </div>
    </div>
    <div className="Benefits-HairRemoval-Button">
      <Button variant="contained" color="secondary" className="font-bold" href="/">
        { translations.button }
      </Button>
    </div>
  </div>
);

export default BenefitsView;
