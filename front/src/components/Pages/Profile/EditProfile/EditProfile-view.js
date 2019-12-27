import React from 'react';
import { Button, TextField } from '@material-ui/core';

import './EditProfile.scss';

const EditProfileView = ({ translations, user, onChange, messageName }) => (
  <div className="contain">
    <div className="pic">
      <img src={user.picture || require('../../../../assets/images/makeup_1.jpg')} alt="user's pfp" className="className"/>
      <input
        type="file"
        accept="image/*"
        id="input-file"
        onChange={onChange('picture', 'files')}
      />
      <div className="image-button">
         {/** htmlFor will targets an input that have the id of its given value */}
        <label htmlFor="input-file">
          <Button className="button-modification" variant="contained">
            {translations.editProfilePicture}
          </Button>
        </label>
      </div>
    </div>

    <div className="list">
      <div className="input-items">
        <div className="items">
          <TextField
            fullWidth
            onChange={onChange('firstname')}
            label={translations.firstname}
            InputLabelProps={{ shrink: true }}
            placeholder={user.firstname}
          />
        </div>
        <div className="input-items">
          <TextField
            fullWidth
            onChange={onChange('firstname')}
            label={translations.firstname}
            InputLabelProps={{ shrink: true }} placeholder={user.firstname}
          />
        </div>
        <div className="input-items">
          <TextField
            fullWidth
            onChange={onChange('lastname')}
            label={translations.lastname}
            InputLabelProps={{ shrink: true }}
            placeholder={user.lastname}
          />
        </div>
        <div className="input-items">
          <TextField
            fullWidth
            onChange={onChange('username')}
            label={translations.username}
            InputLabelProps={{ shrink: true }}
            placeholder={user.username}
          />
        </div>
        <div className="input-items">
          <TextField
            fullWidth
            onChange={onChange('address')}
            label={translations.address}
            InputLabelProps={{ shrink: true }}
            placeholder={user.address}
          />
        </div>
        <div className="input-items">
          <TextField
            fullWidth
            onChange={onChange('zipcode')}
            label={translations.zipcode}
            InputLabelProps={{ shrink: true }}
            placeholder={user.zipcode}
          />
        </div>
        <div className="input-items">
          <TextField
            fullWidth
            onChange={onChange('city')}
            label={translations.city}
            InputLabelProps={{ shrink: true }}
            placeholder={user.city}
          />
        </div>
        <div className="input-items">
          <TextField
            fullWidth
            onChange={onChange('birthdate')}
            label={translations.birthdate}
            InputLabelProps={{ shrink: true }}
            placeholder={user.birthdate}
          />
        </div>
        <div className="input-items">
          <TextField
            fullWidth
            onChange={onChange('email')}
            label={translations.email}
            InputLabelProps={{ shrink: true }}
            placeholder={user.email}
          />
        </div>

        <Button type="submit" variant="contained" color="secondary" className="item mt-4">
          {translations.send}
        </Button>
        {translations.messages[messageName]}
      </div>
    </div>
  </div>
);

export default EditProfileView;
