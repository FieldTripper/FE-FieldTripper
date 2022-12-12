import React from "react";
// import { useQuery } from "@apollo/client";
// import { TRIPS_QUERY } from "../../queries/queries";
// import QueryResult from "../QueryResult/QueryResult";
import "./UserSavedTrips.css";
import UserSavedTripCard from "../UserSavedTripCard/UserSavedTripCard";
// import mockUserSavedTrips from "../../testData/mockUserSavedTrips";

// console.log({ mockUserSavedTrips });

const UserSavedTrips = (mockUserSavedTrips) => {
  // const { loading, error, data } = useQuery(TRIPS_QUERY);
  // console.log({ loading });
  // console.log({ error });
  // console.log({ data });

  console.log({ mockUserSavedTrips });

  const savedTripCards = mockUserSavedTrips.mockUserSavedTrips.savedTrips.map(
    (trip) => {
      console.log({ trip });
      return (
        <UserSavedTripCard
          attendees={trip.attendees}
          destinationName={trip.destinationName}
          destinationPlaceId={trip.destinationPlaceId}
          maxAttendees={trip.maxAttendees}
          startTime={trip.startTime}
          tripName={trip.tripName}
          key={trip.destinationPlaceId}
        />
      );
    }
  );

  return <div className="saved-trip-container">{savedTripCards}</div>;
};

export default UserSavedTrips;
