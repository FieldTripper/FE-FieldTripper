import React from "react";
import "./UserSavedTripCard.css";

const UserSavedTripCard = ({
  attendees,
  destinationName,
  destinationPlaceId,
  maxAttendees,
  startTime,
  tripName,
}) => {
  console.log(tripName);
  return (
    <div className="saved-trip-card">
      <h2>{tripName}</h2>
      <h3>{destinationName}</h3>
      <h3>{startTime}</h3>
      <h4>
        {attendees} people are going, this trip allows a max of {maxAttendees}{" "}
        people.
      </h4>
    </div>
  );
};

export default UserSavedTripCard;
