import { useMutation } from "@apollo/client";
import { DELETE_USER_TRIP_MUTATION } from "../../queries/mutations";
import { USER_TRIPS_QUERY } from "../../queries/queries";
import { formatDates } from "../../utilities/utilities";
import "./UserSavedTripCard.css";
import PropTypes from "prop-types";

const UserSavedTripCard = ({ trip, user }) => {
  const [deleteUserTrip] = useMutation(DELETE_USER_TRIP_MUTATION);

  const handleDelete = () => {
    deleteUserTrip({
      variables: { userId: user.id, tripId: trip.id },
      refetchQueries: [{ query: USER_TRIPS_QUERY }, "UserTrips"],
    });
  };

  const returnedDate = formatDates(trip.startDate, "MMMM D, YYYY");
  const returnedTime = formatDates(trip.startDate, "h:mmA");

  return (
    <div className="saved-trip-card">
      <p className="trip-name">{trip.name}</p>
      <p className="saved-destination">{trip.destinationName}</p>
      <p className="saved-trip-info">
        <b className="break1">Your trip on: </b>
        <span>{returnedDate}</span>
        <br></br>
        <span>starts at</span> <b className="break2">{returnedTime}</b>
      </p>
      <p className="attendance">
        {trip.attendance} out of {trip.maxAttendees} people are attending
      </p>
      <button className="delete--button" onClick={() => handleDelete()}>
        Delete Trip
      </button>
    </div>
  );
};

export default UserSavedTripCard;

UserSavedTripCard.propTypes = {
  trip: PropTypes.shape({
    __typename: PropTypes.string,
    attendance: PropTypes.number,
    destinationName: PropTypes.string,
    destinationPlaceId: PropTypes.string,
    hostId: PropTypes.string,
    id: PropTypes.string,
    maxAttendees: PropTypes.number,
    name: PropTypes.string,
    startTime: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    __typename: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};
