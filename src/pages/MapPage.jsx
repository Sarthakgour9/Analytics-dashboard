import OpenLayersMap from "../maps/OpenLayersMap";

function MapPage() {
  return (
    <div>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        OpenLayers Map
      </h1>

      <OpenLayersMap />
    </div>
  );
}

export default MapPage;
