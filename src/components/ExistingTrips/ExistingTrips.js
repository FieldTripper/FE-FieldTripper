import { useQuery } from "@apollo/client";
import { TRIPS_QUERY } from "../../queries/queries";
import QueryResult from "../QueryResult/QueryResult";
import TripCard from "../TripCard/TripCard";
import "./ExistingTrips.css";

const ExistingTrips = ({ user }) => {
  const { loading, error, data } = useQuery(TRIPS_QUERY);
  console.log({ data });

  return (
    <div className="saved-trips">
      <div className="join-title">
        <p className="join-trip">Join A Trip</p>
      </div>
      <QueryResult loading={loading} error={error} data={data}>
        <article className="existing-trip-card-container">
          {data?.trips.map((trip) => {
            return <TripCard key={trip.id} trip={trip} user={user} />;
          })}
        </article>
      </QueryResult>
    </div>
  );
};
export default ExistingTrips;
