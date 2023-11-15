// src/components/Map.js
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <MapContainer
        center={center}
        zoom={zoom}
        minZoom={3}
        worldCopyJump={true}
        //maxBounds={[[-90, -180], [90, 180]]}
        maxBoundsViscosity={1.0}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=JdbYq0IOmnjd0Jgw8cH7"
          tileSize={512}
          zoomOffset={-1}
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
      </MapContainer>
    </div>
  );
};

// Default Map props if none are specified
Map.defaultProps = {
  center: {
    lat: 37.0902,
    lng: -95.7129,
  },
  zoom: 4,
};

export default Map;
