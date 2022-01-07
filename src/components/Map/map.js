import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';

import './map.css';

function Map() {
  return (
    <section className="map">
      <MapContainer 
        center={[51.505, -0.09]} 
        zoom={13} 
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position='bottomleft' />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            je suis un test dan un popup :)
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default Map;
