import { useMutation } from "@apollo/client";
import { CREATE_USER_TRIP_MUTATION } from "../../queries/queries";
import "./TripCard.css";

function TripCard({ trip, user }) {
  const [createUserTrip, { loading, error }] = useMutation(
    CREATE_USER_TRIP_MUTATION
  );

  const newStartDate1 = trip.startTime.slice(0, -10);
  const newStartDate2 = newStartDate1.split("-");
  const newStartTime = trip.startTime.slice(11, -7);

  const finalTripDate = [newStartDate2[1], newStartDate2[2], newStartDate2[0]];

  const getDisplayedTime = () => {
    let time;
    if (newStartTime === "07") {
      time = "7:00AM";
    }
    if (newStartTime === "08") {
      time = "8:00AM";
    }
    if (newStartTime === "09") {
      time = "9:00AM";
    }
    if (newStartTime === "10") {
      time = "10:00AM";
    }
    if (newStartTime === "11") {
      time = "11:00AM";
    }
    if (newStartTime === "12") {
      time = "12:00PM";
    }
    if (newStartTime === "13") {
      time = "1:00PM";
    }
    if (newStartTime === "14") {
      time = "2:00PM";
    }
    if (newStartTime === "15") {
      time = "3:00PM";
    }
    if (newStartTime === "16") {
      time = "4:00PM";
    }
    if (newStartTime === "17") {
      time = "5:00PM";
    }
    if (newStartTime === "18") {
      time = "6:00PM";
    }
    if (newStartTime === "19") {
      time = "7:00PM";
    }
    if (newStartTime === "20") {
      time = "8:00PM";
    }
    return `${time}`;
  };

  const getDisplayedMonth = () => {
    let month;
    if (newStartDate2[1] === "01") {
      month = "January";
    }
    if (newStartDate2[1] === "02") {
      month = "February";
    }
    if (newStartDate2[1] === "03") {
      month = "March";
    }
    if (newStartDate2[1] === "04") {
      month = "April";
    }
    if (newStartDate2[1] === "05") {
      month = "May";
    }
    if (newStartDate2[1] === "06") {
      month = "June";
    }
    if (newStartDate2[1] === "07") {
      month = "July";
    }
    if (newStartDate2[1] === "08") {
      month = "August";
    }
    if (newStartDate2[1] === "09") {
      month = "September";
    }
    if (newStartDate2[1] === "10") {
      month = "October";
    }
    if (newStartDate2[1] === "11") {
      month = "November";
    }
    if (newStartDate2[1] === "12") {
      month = "December";
    }
    return `${month}`;
  };

  return (
    <article className="trip-card" id={trip.id} key={trip.id}>
      <h3>{trip.name}</h3>
      <p>{trip.destinationName}</p>
      <p>
        This trip on: {getDisplayedMonth()} {newStartDate2[2]},{" "}
        {newStartDate2[0]} starts at: {getDisplayedTime()}
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
