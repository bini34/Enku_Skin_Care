'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

const SetView = ({ center, zoom }: { center: LatLngExpression; zoom: number }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

export default function ShopMap() {
  // Shop's location (replace with your shop's actual coordinates)
  const shopLocation: LatLngExpression = [9.005459, 38.789417]; // Use an array for Leaflet's LatLngExpression

  return (
    <MapContainer
      style={{ height: '400px', width: '100%' }}
    >
      <SetView center={shopLocation} zoom={50} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={shopLocation}>
        <Popup>
          Your Shop Location: {shopLocation[0]}, {shopLocation[1]}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
