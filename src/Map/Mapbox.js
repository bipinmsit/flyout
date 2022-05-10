import React, { createContext, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Mapbox.css";

export const MapboxContext = new createContext();

const Mapbox = ({ children }) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoicmFodWxzZHMiLCJhIjoiY2p3YTd5NzVpMDA5MDN5bzE0Z3YzNW1rZiJ9.GUqAHdwGlesoO4MpewcKNg";
  const mapContainer = useRef(null);
  let map = useRef(null);
  mapboxgl.maxParallelImageRequests = 30;
  mapboxgl.workerCount = 10;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    let ww =
      document(window).width() < window.screen.width
        ? document(window).width()
        : window.screen.width; //get proper width
    let mw = 1080; // min width of site
    let ratio = ww / mw; //calculate ratio
    if (ww < mw) {
      //smaller than minimum size
      document
        .getElementById("#Viewport")
        .attr(
          "content",
          "initial-scale=" +
            ratio +
            ", maximum-scale=" +
            ratio +
            ", minimum-scale=" +
            ratio +
            ", user-scalable=yes, width=" +
            ww
        );
    } else {
      //regular size
      document
        .getElementById("#Viewport")
        .attr(
          "content",
          "initial-scale=1.0, maximum-scale=2, minimum-scale=1.0, user-scalable=yes, width=" +
            ww
        );
    }
  }

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/rahulsds/ckn5jimdm0mek17oc84e6nzdh",
      bounds: [
        [-75, 60],
        [73, 5],
      ],
      zoom: 3,
      minZoom: 1.5,
      maxZoom: 18,
      touchZoomRotate: false,
      clickTolerance: 6,
      attributionControl: false,
      doubleClickZoom: false,
      boxZoom: true,
      pitchWithRotate: true,
      crossSourceCollisions: false,
      dragRotate: true,
      transformRequest: (url, resourceType) => {
        if (url.startsWith("https://api-turb-aware.iata.org")) {
          return {
            url: url,
            headers: { Accept: "application/vnd.mapbox-vector-tile" },
          };
        }
        if (url.startsWith("https://api-turb-aware.iata.org")) {
          return {
            url: url,
            headers: { Accept: "application/vnd.mapbox-vector-tile" },
          };
        }
      },
      //antialias: true
    }).addControl(
      new mapboxgl.AttributionControl({
        compact: true,
      })
    );
  });
  return (
    <MapboxContext.Provider value={{ map }}>
      <div ref={mapContainer} className="map-container">
        {children}
      </div>
    </MapboxContext.Provider>
  );
};

export default Mapbox;
