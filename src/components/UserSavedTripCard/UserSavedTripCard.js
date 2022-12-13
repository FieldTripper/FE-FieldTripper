import React from "react";
import { useMutation } from '@apollo/client';
import { DELETE_TRIP_MUTATION, DELETE_USER_TRIP_MUTATION } from "../../queries/queries";
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
  // const getMonth = () => {
  //   if (newStartDate2[1] === "01") {
  //     return "January";
  //   }
  //   if (newStartDate2[1] === "02") {
  //     return "February";
  //   }
  //   if (newStartDate2[1] === "03") {
  //     return "March";
  //   }
  //   if (newStartDate2[1] === "04") {
  //     return "April";
  //   }
  //   if (newStartDate2[1] === "05") {
  //     return "May";
  //   }
  //   if (newStartDate2[1] === "06") {
  //     return "June";
  //   }
  //   if (newStartDate2[1] === "07") {
  //     return "July";
  //   }
  //   if (newStartDate2[1] === "08") {
  //     return "August";
  //   }
  //   if (newStartDate2[1] === "09") {
  //     return "September";
  //   }
  //   if (newStartDate2[1] === "10") {
  //     return "October";
  //   }
  //   if (newStartDate2[1] === "11") {
  //     return "November";
  //   }
  //   if (newStartDate2[1] === "12") {
  //     return "December";
  //   }
  //   console.log("date", newStartDate2[1]);
  // };

  console.log({hostId})
  const [deleteTrip] = useMutation(DELETE_TRIP_MUTATION);
  const [deleteUserTrip] = useMutation(DELETE_USER_TRIP_MUTATION);

  const handleDelete = () => {
    deleteUserTrip({ variables: { userId: 0, tripId: tripId } });
    deleteTrip({ variables: { id: tripId } });
  }

  return (
    <div className="saved-trip-card">
      <h3>{tripName}</h3>
      <p>{destinationName}</p>
      <p>On: {finalTripDate}</p>
      <p>
        {attendance} out of {maxAttendees} people are attending.
      </p>
      <button className="primary--button" onClick={() => handleDelete()}>Delete Trip</button>
    </div>
  );
};

export default UserSavedTripCard;
