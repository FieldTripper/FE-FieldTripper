import "./LocationPin.css";
import Image from "../../images/location-pin.png"

const LocationPin = ({name}) => {
  return (
    <div className="location-box">
      <img className="locaton-pin" src={Image} alt="location pin"/>
      <h3 className="map-location-name">{name}</h3>
    </div>
  )
}

export default LocationPin