'use client';

import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

// Dynamically import MapContainer and related components
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function ShopMap() {
  // Shop's location (replace with your shop's actual coordinates)
  const shopLocation: LatLngExpression = [9.005459, 38.789417]; // Use an array for Leaflet's LatLngExpression

  return (
    <MapContainer
      style={{ height: '400px', width: '100%' }}
      center={shopLocation}
      zoom={15}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/'>CARTO</a>"
      />
      <Marker position={shopLocation}>
        <Popup>
          Your Shop Location: {shopLocation[0]}, {shopLocation[1]}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
