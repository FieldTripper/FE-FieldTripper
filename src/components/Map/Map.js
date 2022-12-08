import { useState, useEffect, useRef } from "react";

import "./Map.css";

function Map() {
  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center: { lat: 39.703, lng: -105.064 },
          zoom: 8,
        })
      );
    }
  }, [ref, map]);

  return <div className="map--container" ref={ref} />;
}

export default Map;
