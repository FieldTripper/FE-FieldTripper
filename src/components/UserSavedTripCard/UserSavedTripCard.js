import { useMutation } from '@apollo/client';
import { DELETE_USER_TRIP_MUTATION } from "../../queries/queries";
import { USER_TRIPS_QUERY } from "../../queries/queries";
import { formatDates } from '../../utilities/utilities';
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
  user
}) => {
  const [deleteUserTrip] = useMutation(DELETE_USER_TRIP_MUTATION);

  const handleDelete = () => {
    deleteUserTrip({ variables: { userId: user.id, tripId: tripId }, refetchQueries: [
      {query: USER_TRIPS_QUERY},
      'UserTrips'
    ] });
  }

  const returnedDate = formatDates(startDate, "MMMM D, YYYY");
  const returnedTime = formatDates(startDate, "h:mmA");

  return (
    <div className="saved-trip-card">
      <p className="trip-name">{tripName}</p>
      <p className="saved-destination">{destinationName}</p>
      <p className="saved-trip-info">
        <b>Your trip on: </b>
        {returnedDate} 
        <br></br>
         starts at <b>{returnedTime}</b>
      </p>
      <p className="attendance">
        {attendance} out of {maxAttendees} people are attending
      </p>
      <button className="primary--button" onClick={() => handleDelete()}>Delete Trip</button>
    </div>
  );
};

export default UserSavedTripCard;
