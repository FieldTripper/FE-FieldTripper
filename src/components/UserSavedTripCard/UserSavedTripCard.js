import React from "react";
import "./UserSavedTripCard.css";

const UserSavedTripCard = ({
  attendance,
  destinationName,
  destinationPlaceId,
  hostId,
  tripId,
  maxAttendees,
  startDate,
  tripName,
  key,
}) => {
  console.log({ startDate });
  const newStartDate1 = startDate.slice(0, -10);
  const newStartDate2 = newStartDate1.split("-");
  const finalTripDate = [
    newStartDate2[1],
    newStartDate2[2],
    newStartDate2[0],
  ].join("/");
  console.log({ finalTripDate });
  return (
    <div className="saved-trip-card">
      <h2>{tripName}</h2>
      <h3>{destinationName}</h3>
      <h3>{finalTripDate}</h3>
      <h4>
        {attendance} out of {maxAttendees} people.
      </h4>
    </div>
  );
};

export default UserSavedTripCard;
