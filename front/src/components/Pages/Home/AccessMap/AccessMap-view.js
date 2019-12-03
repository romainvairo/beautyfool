import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import './AccessMap.scss';

const position = [48.87030603022608, 2.305782437324524];

const AccessMapView = ()  => (

  <section className="AccessMap">
    <Map center={position} zoom={15}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    <Marker position={position}>
      <Popup>Beautyfool</Popup>
    </Marker>
    </Map>
  </section>

);

export default AccessMapView;
