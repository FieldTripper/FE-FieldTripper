import React from "react";
import { useQuery } from "@apollo/client";
import { TRIPS_QUERY } from "../../queries/queries";
import QueryResult from "../QueryResult/QueryResult";
import "./UserSavedTrips.css";
import UserSavedTripCard from "../UserSavedTripCard/UserSavedTripCard";

const UserSavedTrips = () => {
  const { loading, error, data } = useQuery(TRIPS_QUERY);
  console.log({ loading });
  console.log({ error });
  console.log({ data });

  return (
    <div className="saved-trip-container">
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
