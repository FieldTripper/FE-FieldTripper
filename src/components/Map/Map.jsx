import GoogleMapReact from "google-map-react";
import LocationPin from "../LocationPin/LocationPin";
import "./Map.css";
import PropTypes from 'prop-types';

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
    <div className="google-map">
      <GoogleMapReact className="google-map"
        bootstrapURLKeys={{ key: process.env.REACT_APP_MATTS_API_KEY }}
        defaultCenter={defaultCenter.center}
        defaultZoom={defaultCenter.zoom}
      >
        {data.museums.map((pin) => {
    return (
      <LocationPin
          lat={pin.latitude}
          lng={pin.longitude}
          name={pin.name}
          placeId={pin.placeId}
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