import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import { useSelector } from 'react-redux';

import './map.css';

function Map() {
  const lat = useSelector((state) => state.lat);
  const lng = useSelector((state) => state.lng);
  const city = useSelector((state) => state.city);
  const postalCode = useSelector((state) => state.postalCode);
  const isSuccess = useSelector((state) => state.isSuccess);
  const isError = useSelector((state) => state.isError);

  const position = [lat, lng];
  
  return (
    <section className="map">
      {
        isSuccess
        ? (
            <MapContainer 
              center={position} 
              zoom={13} 
              scrollWheelZoom={true}
              zoomControl={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <ZoomControl position='bottomleft' />
              <Marker position={position}>
                <Popup>
                  VOUS ÊTES ICI <br />
                  { city + ' ' + postalCode }
                </Popup>
              </Marker>
            </MapContainer>
        )
        : (
            <div className="waiting">
              {
                isError 
                ? (
                  <>
                    <p className="isError">Oups, une erreur c'est produite :/</p>
                    <small className="isErrorSmall">(Veuillez écrire une ip correcte)</small>
                  </>
                )
                : 'En attente...'
              }
            </div>
        )
      }
    </section>
  );
}

export default Map;
