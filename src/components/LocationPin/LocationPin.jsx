import { Link } from "react-router-dom";
import Image from "../../images/location-pin.png"
import "./LocationPin.css";

const LocationPin = ({name, placeId}) => {

  return (
    <div className="location-box">
      <Link to={`/museums/${placeId}`}>
        <img className="location-pin" src={Image} alt="location pin"/>
      </Link>
      <h3 className="map-location-name">{name}</h3>
    </div>
  )
}

export default LocationPin