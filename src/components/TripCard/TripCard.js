import { useMutation } from "@apollo/client";
import { CREATE_USER_TRIP_MUTATION } from "../../queries/mutations";
import { formatDates } from "../../utilities/utilities";
import "./TripCard.css";

function TripCard({ trip, user }) {
  const [createUserTrip, { loading, error, data }] = useMutation(
    CREATE_USER_TRIP_MUTATION
  );
  console.log({loading})
  console.log({error})
  console.log({data})
  
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
        onClick={() =>
          createUserTrip({
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
