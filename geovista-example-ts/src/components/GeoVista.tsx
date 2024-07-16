// import React from "react";
// import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
// import { LatLngTuple } from "leaflet";
// import "leaflet/dist/leaflet.css";

// interface GeoVistaProps {
//   center: LatLngTuple;
//   zoom: number;
//   geoJsonData: GeoJSON.GeoJsonObject;
//   style?: (feature: any) => any;
//   filter?: (feature: any) => boolean;
// }

// const GeoVista: React.FC<GeoVistaProps> = ({
//   center,
//   zoom,
//   geoJsonData,
//   style,
//   filter,
// }) => {
//   return (
//     <MapContainer
//       center={center}
//       zoom={zoom}
//       style={{ height: "400px", width: "100%" }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <GeoJSON data={geoJsonData} style={style} filter={filter} />
//     </MapContainer>
//   );
// };

// export default GeoVista;
