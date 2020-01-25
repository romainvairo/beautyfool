import React from 'react';
import { composeDifference } from '../_composeDifference';

import './User-view.scss';

const UserView = ({ formData, onChange }) => (
  <>
  <div className="flex mb-12 mt-10">
    <div className="flex flex-col block mr-6">
      <label className="labelName">Pseudo</label>
      <label className="labelName">Prenom</label>
      <label className="labelName">Nom</label>
      <label className="labelName">Email</label>
      <label className="labelName">Date de naissance</label>
      <label className="labelName">Point de fidelité</label>
      <label className="labelName">Ville</label>
      <label className="labelName">Code postal</label>
      <label className="labelName">Adresse</label>
      <label className="labelName">Telephone</label>
    </div>
      <div className="flex flex-col">
      <div className="block">
        <input
          type="text"
          className="inputResult"
          value={formData.username}
          onChange={onChange('username')}
        />
      </div>
      <div className="block">
        <input
          type="text"
          className="inputResult"
          value={formData.firstname}
          onChange={onChange('firstname')}
        />
      </div>
      <div className="block">
        <input
          type="text"
          className="inputResult"
          value={formData.lastname}
          onChange={onChange('lastname')}
        />
      </div>
      <div className="block">
        <input
          type="text"
          className="inputResult"
          value={formData.email}
          onChange={onChange('email')}
        />
      </div>
      <div className="block">
        <input
          type="date"
          className="inputResult"
          value={formData.birthdate}
          onChange={onChange('birthdate')}
        />
      </div>
      <div className="block ">
          <input
            type="number"
            className="inputResult"
            value={formData.fidelity}
            onChange={onChange('fidelity')}
          />
        </div>
        <div className="block">
          <input
            type="text"
            className="inputResult"
            value={formData.city}
            onChange={onChange('city')}
          />
        </div>
        <div className="block">
          <input
            type="text"
            className="inputResult"
            value={formData.zipcode}
            onChange={onChange('zipcode')}
          />
        </div>
        <div className="block">
          <input
            type="text"
            className="inputResult"
            value={formData.address}
            onChange={onChange('address')}
          />
        </div>
        <div className="block">
          <input
            type="text"
            className="inputResult"
            value={formData.phone}
            onChange={onChange('phone')}
          />
        </div>
      </div>
    </div>
  </>
);

UserView.difference = composeDifference([
  'username',
  'firstname',
  'lastname',
  'email',
  'picture',
  'birthdate',
  'fidelity',
  'city',
  'zipcode',
  'address',
  'phone',
]);

export default UserView;
