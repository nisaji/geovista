import { useState, useEffect } from "react";
import { LatLngTuple } from "leaflet";
import { GeoVista } from "geovista";

const Map: React.FC = () => {
  const [geoJsonData, setGeoJsonData] =
    useState<GeoJSON.FeatureCollection | null>(null);

  useEffect(() => {
    const sampleData: GeoJSON.FeatureCollection = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            name: "Sample Area",
            population: 150000,
          },
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [139.7, 35.6],
                [139.8, 35.6],
                [139.8, 35.7],
                [139.7, 35.7],
                [139.7, 35.6],
              ],
            ],
          },
        },
      ],
    };
    setGeoJsonData(sampleData);
  }, []);

  if (!geoJsonData) return <div>Loading...</div>;

  const center: LatLngTuple = [35.65, 139.75];
  console.log("40");
  return (
    <GeoVista
      center={center}
      zoom={10}
      geoJsonData={geoJsonData}
      style={() => ({
        fillColor: "blue",
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.7,
      })}
      filter={(feature: GeoJSON.Feature): boolean =>
        feature.properties !== null &&
        feature.properties !== undefined &&
        typeof feature.properties.population === "number" &&
        feature.properties.population > 100000
      }
    />
  );
};

export default Map;
