import { useQuery } from "@apollo/client";
import { USER_TRIPS_QUERY } from "../../queries/queries";
import QueryResult from "../QueryResult/QueryResult";
import UserSavedTripCard from "../UserSavedTripCard/UserSavedTripCard";
import "./UserSavedTrips.css";
import PropTypes from 'prop-types';

const UserSavedTrips = ({ user }) => {
  const userId = Number(user.id);
  const { loading, error, data } = useQuery(USER_TRIPS_QUERY, {
    variables: {
      userId,
    },
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
  });

  return (
    <div className="saved-trip-container">
      <div className="page-title">
        <h2 className="user-saved-trips">Your Saved Field Trips</h2>
      </div>
      <QueryResult data={data} error={error} loading={loading}>
        <>
          {
            data && data.trips.length
              ? data?.trips.map((trip, index) => {
                  return (
                    <UserSavedTripCard
                      trip={trip} 
                      user={user}
                      key={index}
                    />
                  );
                })
              : <p>You don't have any trips planned, yet. Why not try hosting or joining a trip?</p>
          }
        </>
      </QueryResult>
    </div>
  );
};

export default UserSavedTrips;

UserSavedTrips.propTypes = {
  user: PropTypes.shape({
    __typename: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};