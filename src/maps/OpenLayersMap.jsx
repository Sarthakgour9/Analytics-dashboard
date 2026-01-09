import { useEffect, useRef } from "react";
import "ol/ol.css";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";

import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { Icon, Style } from "ol/style";

function OpenLayersMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    const markerSource = new VectorSource();
    const markerLayer = new VectorLayer({ source: markerSource });

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({ source: new OSM() }),
        markerLayer,
      ],
      view: new View({
        center: fromLonLat([77.209, 28.6139]), // fallback (Delhi)
        zoom: 12,
      }),
    });

    // 📍 Get user's current location
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;

          const userMarker = new Feature({
            geometry: new Point(fromLonLat([longitude, latitude])),
          });

          userMarker.setStyle(
            new Style({
              image: new Icon({
                src: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
                scale: 0.05,
              }),
            })
          );

          markerSource.addFeature(userMarker);

          // Center map on user
          map.getView().setCenter(fromLonLat([longitude, latitude]));
          map.getView().setZoom(14);
        },
        (err) => {
          console.error("Location error:", err);
        }
      );
    }

    return () => map.setTarget(null);
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ height: "500px", width: "100%", borderRadius: "8px" }}
    />
  );
}

export default OpenLayersMap;
