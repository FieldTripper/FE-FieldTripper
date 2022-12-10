import { useMutation } from '@apollo/client';
import { CREATE_USER_TRIP_MUTATION } from '../../queries/queries';
import './TripCard.css';

// import { DELETE_TRIP_MUTATION } from '../../queries/queries';

function TripCard({ trip, user }) {
  const [createUserTrip, { loading, error, data }] = useMutation(CREATE_USER_TRIP_MUTATION);
  // const [deleteTrip, { loading, error, data }] = useMutation(DELETE_TRIP_MUTATION);
  console.log({loading})
  console.log({error})
  console.log({data})

  return (
    <article className="trip-card" id={trip.id} key={trip.id} >
      <h3>{trip.name}</h3>
      <p>{trip.destinationName}</p>
      <p>{trip.startTime}</p>
      <button onClick={() => createUserTrip({ variables: { userId: user.id, tripId: trip.id, isHost: false } })}>Join Trip</button>
      {/* TESTING PURPOSES */}
      {/* <button onClick={() => deleteTrip({ variables: { id: trip.id } })}>Delete Trip</button> */}
    </article>
  )
}

export default TripCard;