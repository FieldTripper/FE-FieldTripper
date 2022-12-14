import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { USER_TRIPS_QUERY } from "../../queries/queries";
import QueryResult from "../QueryResult/QueryResult";
import "./UserSavedTrips.css";
import UserSavedTripCard from "../UserSavedTripCard/UserSavedTripCard";

const UserSavedTrips = ({ user }) => {
  const userId = Number(user.id);
  const [ getUserTrips, { loading, error, data }] = useLazyQuery(USER_TRIPS_QUERY, {
    variables: {
      userId,
    },
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });
  console.log({data})

  const getUserTripsWrapped = () => {
    console.log('Calling get user trips...')
    getUserTrips()
  }

  useEffect(() => {
    console.log("Calling get user trips from useEffect");
    getUserTrips();
  }, [])

  return (
    <div className="saved-trip-container">
      <div className="page-title">
        <h2 className="user-saved-trips">Your Saved Field Trips</h2>
      </div>
      <QueryResult data={data} error={error} loading={loading}>
        <>
          {data?.trips.map((trip, index) => {
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
                key={index}
                user={user}
                getUserTrips={getUserTripsWrapped}
              />
            );
          })}
        </>
      </QueryResult>
    </div>
  );
};

export default UserSavedTrips;
