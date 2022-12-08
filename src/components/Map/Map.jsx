import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "../LocationPin/LocationPin";

import "./Map.css";

 const Map = ({ data }) => {

  const defaultCenter = {
    center: {
      lat: data.museums[0].latitude,
      lng: data.museums[0].longitude
    },
    zoom: 15
  };

  return (
  <div className="map">
    <h2 className="map-h2">Museums</h2>
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MATTS_API_KEY }}
        defaultCenter={defaultCenter.center}
        defaultZoom={defaultCenter.zoom}
      >
        {data.museums.map((pin) => {
    console.log({pin})
    return (
      <LocationPin
          lat={pin.latitude}
          lng={pin.longitude}
          name={pin.name}
          key={pin.placeId}
        />
    );
  })
}
      </GoogleMapReact>
    </div>
  </div>
  )
  }

export default Map; 