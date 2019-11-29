import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import './AccessMap.scss';

const position = [48.87030603022608, 2.305782437324524];

const AccessMapView = ()  => (
  
  <section>
    <div id="map">
      <Map center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>Institut de Beauté</Popup>
        </Marker>
      </Map>
    </div>
  </section>

);

export default AccessMapView;