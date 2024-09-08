"use client";

import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import shp from "shpjs";
import "leaflet/dist/leaflet.css";

export default function Home() {
  const [geoJsonData, setGeoJsonData] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const arrayBuffer = e.target.result;
        const geojson = await shp(arrayBuffer); // Convert to GeoJSON
        setGeoJsonData(geojson);
      };
      reader.readAsArrayBuffer(file); // Read file as an ArrayBuffer
    }
  };

  const geoJsonStyle = {
    color: "blue",
    weight: 2,
    fillColor: "lightblue",
    fillOpacity: 0.5,
  };

  return (
    <div>
      <input type="file" accept=".zip" onChange={handleFileUpload} />
      <MapContainer center={[37.8, -96]} zoom={4} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {geoJsonData && <GeoJSON data={geoJsonData} style={geoJsonStyle} />}
      </MapContainer>
    </div>
  );
}
