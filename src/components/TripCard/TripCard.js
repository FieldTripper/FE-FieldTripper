import { useMutation } from "@apollo/client";
import { CREATE_USER_TRIP_MUTATION } from "../../queries/mutations";
import { formatDates } from "../../utilities/utilities";
import "./TripCard.css";
import PropTypes from 'prop-types';

function TripCard({ trip, user }) {
  const [createUserTrip] = useMutation(CREATE_USER_TRIP_MUTATION);

  const returnedDate = formatDates(trip.startTime, "MMMM D, YYYY");
  const returnedTime = formatDates(trip.startTime, "h:mmA")
  
  return (
    <article className="trip-card" id={trip.id} key={trip.id}>
      <h3>{trip.name}</h3>
      <p>{trip.destinationName}</p>
      <p>
        This trip on: {returnedDate} starts at: {returnedTime}
      </p>
      <button
        onClick={() => createUserTrip({
            variables: { userId: user.id, tripId: trip.id, isHost: false },
          })
        }
      >
        Join Trip
      </button>
    </article>
  );
}

export default TripCard;

TripCard.propTypes = {
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