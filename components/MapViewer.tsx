// components/MapViewer.tsx
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Dynamically import react-leaflet components (no SSR)
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

interface MapViewerProps {
  lat: number | null;
  lng: number | null;
  hasCheckedForLocation: boolean;
}

// Helper component to fix Leaflet size issue
function ResizeHandler() {
  const map = useMap();
  useEffect(() => {
    if (map) {
      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    }
  }, [map]);
  return null;
}

export default function MapViewer({ lat, lng, hasCheckedForLocation }: MapViewerProps) {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== "undefined") {
      (async () => {
        try {
          setIsLoading(true);
          const leaflet = await import("leaflet");

          // Fix marker icons
          delete (leaflet.Icon.Default.prototype as unknown as { _getIconUrl: unknown })._getIconUrl;
          leaflet.Icon.Default.mergeOptions({
            iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
            iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
            shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
          });
        } catch (error) {
          console.error("Failed to load Leaflet:", error);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, []);

  const hasLocationData =
    lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng);

  if (!isClient || isLoading) {
    return (
      <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-gray-100">
        <div className="text-gray-500 flex flex-col items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500 mb-3"></div>
          <span>Loading map...</span>
        </div>
      </div>
    );
  }

  if (hasCheckedForLocation && !hasLocationData) {
    return (
      <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg flex flex-col items-center justify-center bg-gray-100 p-4">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No location data found</h3>
        <p className="text-gray-500 text-center">This image doesn&apos;t contain GPS coordinates.</p>

      </div>
    );
  }

  if (!hasCheckedForLocation) {
    return (
      <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg flex flex-col items-center justify-center bg-gray-100 p-4">
        <p className="text-gray-500 text-center">Upload an image to check for location data</p>
      </div>
    );
  }

  const position: [number, number] = [lat as number, lng as number];

  return (
    <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <ResizeHandler />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <a
              href={`https://www.google.com/maps?q=${lat},${lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Open in Google Maps
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
