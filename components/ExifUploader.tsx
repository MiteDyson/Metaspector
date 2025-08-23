// components/ExifUploader.tsx
"use client";

import { useState } from "react";
import EXIF from "exif-js";
import MapViewer from "./MapViewer";

interface GpsData {
  lat: number;
  lng: number;
}

export default function ExifUploader() {
  const [metadata, setMetadata] = useState<Record<string, any> | null>(null);
  const [gps, setGps] = useState<GpsData | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [hasCheckedForLocation, setHasCheckedForLocation] = useState(false);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setHasCheckedForLocation(true);

    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        EXIF.getData(img, function (this: any) {
          const allMeta = EXIF.getAllTags(this);
          setMetadata(allMeta);

          if (allMeta.GPSLatitude && allMeta.GPSLongitude) {
            const lat = convertDMSToDD(
              allMeta.GPSLatitude,
              allMeta.GPSLatitudeRef
            );
            const lng = convertDMSToDD(
              allMeta.GPSLongitude,
              allMeta.GPSLongitudeRef
            );
            setGps({ lat, lng });
          } else {
            setGps(null);
          }
        });
      };
      img.src = ev.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  // Convert GPS from DMS → Decimal Degrees
  const convertDMSToDD = (dms: number[], ref: string): number => {
    const [deg, min, sec] = dms;
    let dd = deg + min / 60 + sec / 3600;
    if (ref === "S" || ref === "W") dd = dd * -1;
    return dd;
  };

  // Helper to safely display any value
  const display = (value: unknown) =>
    value === undefined || value === null ? "—" : String(value);

  // Formatter for shutter speed
  const formatShutter = (value: any) => {
    if (!value) return "—";
    if (typeof value === "number") {
      if (value >= 1) return `${value.toFixed(1)}s`;
      return `1/${Math.round(1 / value)}s`;
    }
    return String(value);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-5xl mx-auto">
      {/* Upload Button */}
      <label className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
        Choose Image
        <input
          type="file"
          accept="image/*"
          onChange={handleFile}
          className="hidden"
        />
      </label>

      {/* Preview + Metadata */}
      {preview && metadata && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Image Preview */}
          <div className="flex flex-col items-center">
            <img
              src={preview}
              alt="preview"
              className="rounded-lg shadow-lg max-h-96 object-contain"
            />
            <p className="text-sm text-gray-500 mt-2">
              {display(metadata.Model)}
            </p>
          </div>

          {/* Metadata */}
          <div className="bg-opacity-1 rounded-xl shadow-md p-4 w-80 h-90">
            <h3 className="font-bold text-lg mb-3">📷 Camera Info</h3>
            <ul className="text-sm mb-0">
              <li className="mb-1">
                <b>Make:</b> {display(metadata.Make)}
              </li>
              <li className="mb-1">
                <b>Model:</b> {display(metadata.Model)}
              </li>
              <li className="mb-0">
                <b>Date Taken:</b> {display(metadata.DateTimeOriginal)}
              </li>
            </ul>

            <h3 className="font-bold text-lg mt-4 mb-3">⚙️ Settings</h3>
            <ul className="text-sm mb-0">
              <li className="mb-1">
                <b>Exposure Time:</b> {formatShutter(metadata.ExposureTime)}
              </li>
              <li className="mb-1">
                <b>Aperture:</b> f/{display(metadata.FNumber)}
              </li>
              <li className="mb-1">
                <b>ISO:</b> {display(metadata.ISOSpeedRatings)}
              </li>
              <li className="mb-1">
                <b>Focal Length:</b> {display(metadata.FocalLength)}mm
              </li>
              <li className="mb-1">
                <b>Flash:</b> {display(metadata.Flash)}
              </li>
              <li className="mb-0">
                <b>White Balance:</b> {display(metadata.WhiteBalance)}
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Map Section - Only show if we've checked for location data */}
      {hasCheckedForLocation && (
        <div className="flex flex-col items-center w-full mt-6 space-y-4">
          <h3 className="font-bold text-lg text-center">🌍 Location</h3>
          <div className="w-full md:w-[800px] h-[400px] rounded-lg overflow-hidden shadow-lg">
            <MapViewer 
              lat={gps?.lat || null} 
              lng={gps?.lng || null} 
              hasCheckedForLocation={hasCheckedForLocation}
            />
          </div>
          {gps && (
            <a
              href={`https://www.google.com/maps?q=${gps.lat},${gps.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 text-center"
            >
              Open in Google Maps
            </a>
          )}
        </div>
      )}
    </div>
  );
}