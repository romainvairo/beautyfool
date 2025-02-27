import React from 'react';
import { Button, TextField } from '@material-ui/core';

import './EditProfile.scss';

const EditProfileView = ({
  translations,
  user,
  onChange,
  onSubmit,
  messageName,
  lastname,
  firstname,
  username,
  address,
  zipcode,
  city,
  birthdate,
  phone,
  email,
  picture,
  }) => (
  <div className="contain mt-3">
    <form onSubmit={onSubmit} className="EditProfileFormForm">
      <div className="pic">
        <img src={user.picture || require('../../../../assets/images/makeup_1.jpg')} alt="user's pfp" className="editProfile-picture  w-64 h-64 rounded-full"/>
        <input
          type="file"
          accept="image/*"
          id="input-file"
          className="editProfile-fileSelect"
        />
      </div>

      <div className="list text-center">
        <div className="items">
          <div className="input-items">
            <TextField
              fullWidth
              onChange={onChange('lastname')}
              label={translations.lastname}
              InputLabelProps={{ shrink: true }}
              value={lastname}
              placeholder={user.lastname}
            />
          </div>
          <div className="input-items">
            <TextField
              fullWidth
              onChange={onChange('firstname')}
              label={translations.firstname}
              InputLabelProps={{ shrink: true }}
              value={firstname}
              placeholder={user.firstname}
            />
          </div>
          <div className="input-items">
            <TextField
              fullWidth
              onChange={onChange('username')}
              label={translations.username}
              InputLabelProps={{ shrink: true }}
              value={username}
              placeholder={user.username}
            />
          </div>
          <div className="input-items">
            <TextField
              fullWidth
              onChange={onChange('address')}
              label={translations.address}
              InputLabelProps={{ shrink: true }}
              value={address}
              placeholder={user.address}
            />
          </div>
          <div className="input-items">
            <TextField
              fullWidth
              onChange={onChange('zipcode')}
              label={translations.zipcode}
              InputLabelProps={{ shrink: true }}
              value={zipcode}
              placeholder={user.zipcode}
            />
          </div>
          <div className="input-items">
            <TextField
              fullWidth
              onChange={onChange('city')}
              label={translations.city}
              InputLabelProps={{ shrink: true }}
              value={city}
              placeholder={user.city}
            />
          </div>
          <div className="input-items">
            <TextField
              fullWidth
              type="date"
              onChange={onChange('birthdate')}
              label={translations.birthdate}
              InputLabelProps={{ shrink: true }}
              value={birthdate}
              placeholder={user.birthdate}
            />
          </div>
          <div className="input-items">
            <TextField
              fullWidth
              onChange={onChange('phone')}
              label={translations.phone}
              InputLabelProps={{ shrink: true }}
              value={phone}
              placeholder={user.phone}
            />
          </div>
          <div className="input-items">
            <TextField
              fullWidth
              onChange={onChange('email')}
              label={translations.email}
              InputLabelProps={{ shrink: true }}
              value={email}
              placeholder={user.email}
            />
          </div>
          <Button type="submit" variant="contained" color="secondary" className="item mt-8 mb-8">
          {translations.send}
          </Button>
          <p className="text-red-600 font-bold">
          {translations.messages[messageName]}
          </p>
        </div>
      </div>
    </form>
  </div>
);

export default EditProfileView;
