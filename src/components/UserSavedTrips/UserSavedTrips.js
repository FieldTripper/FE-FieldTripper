import React from "react";
import { useQuery } from "@apollo/client";
import { USER_TRIPS_QUERY } from "../../queries/queries";
import QueryResult from "../QueryResult/QueryResult";
import "./UserSavedTrips.css";
import UserSavedTripCard from "../UserSavedTripCard/UserSavedTripCard";

const UserSavedTrips = ({ user }) => {
  const userId = Number(user.id);
  const { loading, error, data } = useQuery(USER_TRIPS_QUERY, {
    variables: {
      userId,
    },
  });

  return (
    <div className="saved-trip-container">
      <div className="page-title">
        <p className="user-saved-trips">Your Saved Field Trips</p>
      </div>
      <QueryResult data={data} error={error} loading={loading}>
        <>
          {data?.trips.map((trip) => {
            return (
              <UserSavedTripCard
                attendance={trip.attendance}
                destinationName={trip.destinationName}
                destinationPlaceId={trip.destinationPlaceId}
                hostId={trip.hostId}
                tripId={trip.id}
                maxAttendees={trip.maxAttendees}
                startDate={trip.startTime}
                tripName={trip.name}
                key={trip.destinationPlaceId}
              />
            );
          })}
        </>
      </QueryResult>
    </div>
  );
};

export default UserSavedTrips;
