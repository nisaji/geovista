# GeoVista

GeoVista is a library for easily visualizing GeoJSON data in React applications. Based on Leaflet and React Leaflet, it provides a simple interface for displaying geographic data.

## Installation

Install using npm:

```bash
npm install geovista
```

## Usage

To use GeoVista, implement it as follows:

```tsx
import React from "react";
import { GeoVista } from "geovista";
import "leaflet/dist/leaflet.css";

const MyMap = () => {
  const geoJsonData = {
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

  return (
    <GeoVista
      center={[35.65, 139.75]}
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
      filter={(feature) => feature.properties.population > 100000}
    />
  );
};

export default MyMap;
```

![Sample Map](docs/images/sample.png)

## Properties

The GeoVista component accepts the following properties:

- center: Center coordinates of the map ([latitude, longitude])
- zoom: Initial zoom level
- geoJsonData: GeoJSON data to be displayed
- style: Function to define the style of each GeoJSON feature (optional)
- filter: Function to filter the features to be displayed (optional)

## Notes

Ensure you import the Leaflet stylesheet (e.g., import 'leaflet/dist/leaflet.css';).

When using Next.js, add the following configuration to next.config.js:

```next.config.js
const nextConfig = {
  transpilePackages: ['geovista'],
};

module.exports = nextConfig;
```

## License

Released under the MIT License. For more details, refer to the LICENSE file.

## Contributions

Bug reports and feature requests are accepted on the GitHub Issues page. Pull requests are also welcome.

## Support

For questions or assistance, use the GitHub Issues page.
