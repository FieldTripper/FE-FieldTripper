import React from "react";
import { useQuery } from "@apollo/client";
import { TRIPS_QUERY } from "../../queries/queries";
import QueryResult from "../QueryResult/QueryResult";
import TripCard from "../TripCard/TripCard";
import "./ExistingTrips.css";

const ExistingTrips = ({ user }) => {
  const { loading, error, data } = useQuery(TRIPS_QUERY);
  console.log({ loading });
  console.log({ error });
  console.log({ data });

  return (
    <div className="saved-trips page--container column">
      <h2>Join A Trip</h2>
      <QueryResult loading={loading} error={error} data={data}>
        <article className="page--container row">
          {data?.trips.map((trip) => {
            return <TripCard key={trip.id} trip={trip} user={user} />;
          })}
        </article>
      </QueryResult>
    </div>
  );
};
export default ExistingTrips;
