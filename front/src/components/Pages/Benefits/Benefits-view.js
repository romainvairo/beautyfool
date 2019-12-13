import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import './Benefits.scss';

const BenefitsView = ({ translations, nails, hairRemoval, makeup, faceCare, bodyCare, handsAndFeetCare }) => (
  <div className="Benefits">
    <div className="Benefits-Nails">
      <div className="Benefits-Nails-Form">
        <h1 className="Benefits-Nails-Title">{translations.nails}</h1>
        {nails.map(( nail ) => (
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  value="checked"
                />
              }
              label={nail.name}
            />
            <h2>{nail.price}</h2>
            <h2>{nail.duration}</h2>
          </div>
        ))}
      </div>
      <div className="Benefits-Nails-Image">
        <img src={require('../../../assets/images/nails_1.jpg')} alt=""/>
      </div>
    </div>
    <div className="Benefits-HairRemoval">
      <div className="Benefits-HairRemoval-Image">
        <img src={require('../../../assets/images/legs_3.jpg')} alt=""/>
      </div>
      <div className="Benefits-HairRemoval-Form">
        <h1 className="Benefits-HairRemoval-Title">{translations.hairRemoval}</h1>
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
    <div className="Benefits-Makeup">
      <div className="Benefits-Makeup-Form">
        <h1 className="Benefits-Makeup-Title">{translations.makeup}</h1>
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
      <div className="Benefits-Makeup-Image">
        <img src={require('../../../assets/images/makeup_3.jpg')} alt=""/>
      </div>
    </div>
    <div className="Benefits-Face">
      <div className="Benefits-Face-Image">
        <img src={require('../../../assets/images/face_3.jpg')} alt=""/>
      </div>
      <div className="Benefits-Face-Form">
        <h1 className="Benefits-Face-Title">{translations.face}</h1>
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
    <div className="Benefits-Body">
      <div className="Benefits-Body-Form">
        <h1 className="Benefits-Body-Title">{translations.body}</h1>
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
      <div className="Benefits-Body-Image">
        <img src={require('../../../assets/images/body_4.jpg')} alt=""/>
      </div>
    </div>
    <div className="Benefits-HandsAndFeet">
      <div className="Benefits-HandsAndFeet-Image">
        <img src={require('../../../assets/images/feet_3.jpg')} alt=""/>
      </div>
      <div className="Benefits-HandsAndFeet-Form">
        <h1 className="Benefits-HandsAndFeet-Title">{translations.handsAndFeet}</h1>
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
    <div className="Benefits-Button">
      <Button variant="contained" color="secondary" className="font-bold" href="/">
        { translations.button }
      </Button>
    </div>
  </div>
);

export default BenefitsView;
