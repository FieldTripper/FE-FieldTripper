import { useState, useEffect, useRef } from 'react';
import React, { Children, isValidElement, cloneElement, children } from 'react';

import './Map.css';

function Map({ data }) {
  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {
        center: { lat: data.museums[0].latitude , lng: data.museums[0].longitude },
        zoom: 10
      }));
    }
  }, [ref, map]);

  return (
    <>
      <div className="map--container" ref={ref} />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // set the map prop on the child component
          // @ts-ignore
          return cloneElement(child, { map });
        }
      })}
  </>
  )
}

export default Map;