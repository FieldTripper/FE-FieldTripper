import React from "react";
import "./TripType.css";
import { Link } from "react-router-dom";

const TripType = (user) => {
  return (
    <div className="trip-type">
      <p className="choose-trip">Choose Your Trip Type</p>
      <Link to="/search-form">
        <button className="trip-host">Host A Trip</button>
      </Link>
      <Link to="/existing-trips">
        <button className="trip-join">Join A Trip</button>
      </Link>
      <Link to="/saved-trips">
        <button className="trip-saved">Your Saved Trips</button>
      </Link>
    </div>
  );
};
export default TripType;
