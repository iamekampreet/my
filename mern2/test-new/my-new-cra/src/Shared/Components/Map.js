// import React, { useEffect, useRef } from "react";
// // import "ol/ol.css";
// // import { Map, View } from "ol";
// // import TileLayer from "ol/layer/Tile";
// // import OSM from "ol/source/OSM";

// const NewMap = () => {
//   const loadMapHere = useRef();

//   useEffect(() => {
//     //   const map = new Map({
//     //     target: loadMapHere.current,
//     //     layers: [
//     //       new TileLayer({
//     //         source: new OSM(),
//     //       }),
//     //     ],
//     //     view: new View({
//     //       center: [0, 0],
//     //       zoom: 13,
//     //     }),
//     //   });

//     var map = new window.ol.Map({
//       target: loadMapHere.current,
//       layers: [
//         new window.ol.layer.Tile({
//           source: new window.ol.source.OSM(),
//         }),
//       ],
//       view: new window.ol.View({
//         center: window.ol.proj.fromLonLat([37.41, 8.82]),
//         zoom: 4,
//       }),
//     });
//   }, []);

//   return (
//     <div
//       id="map"
//       ref={loadMapHere}
//       style={{ height: "400px", width: "100%" }}
//     ></div>
//   );
// };

// export default NewMap;

//  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.1.1/css/ol.css" type="text/css">
// <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.1.1/build/ol.js"></script>

import React, { useRef, useEffect } from "react";

// import "./Map.css";
import "ol/ol.css";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    new window.ol.Map({
      target: mapRef.current,
      // target: "map-hook",
      layers: [
        new window.ol.layer.Tile({
          source: new window.ol.source.OSM(),
        }),
      ],
      view: new window.ol.View({
        center: window.ol.proj.fromLonLat([center.lng, center.lat]),
        zoom: zoom,
      }),
    });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      // style={props.style}
      style={{ width: "100%", height: "300px" }}
      id="map"
    ></div>
  );
};

export default Map;
