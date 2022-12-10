import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./BookingForm.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// const CREATE_TRIP = gql`
//   mutation CreateTrip($input: CreateUserTrip!) {
//     createUserTrip(input: $input) {
//       trip {
//         userId
//         museumName
//         tripId
//         date
//         time
//         city
//         state
//         address
//         longitude
//         latitude
//       }
//     }
//   }
// `;

/*
mutation {
    createUserTrip(input: {
        userId: 2
        tripId: 6 
        isHost: true}) {
            userTrip {
                userId
                tripId
                user {
                    name
                    email
                }
            }
        }
    }
  */

const BookingForm = ({ bookTrip, museumData }) => {
  const [startDate, setStartDate] = useState(new Date());
  // console.log(bookTrip);
  console.log({ museumData });
  let [museumValues, setMuseumValues] = useState({
    placeId: "",
    date: startDate,
    time: "",
    people: "",
  });

  let handleMuseumChange = (e) => {
    const fieldOption = e.target;
    setMuseumValues({ ...museumValues, [fieldOption.name]: fieldOption.value });
    // setStartDate(...startDate);
  };

  let handleDateChange = (date) => {
    setMuseumValues({ ...museumValues, ...{ date: date } });
  };
  // const test = museumData.museums.map((museum) =>
  //   // console.log("museum name", museum.name)
  //   console.log({ museum })
  // );

  return (
    <section className="booking-page">
      <h2>Book a Field Trip</h2>
      <form className="booking-form">
        <select
          className="booking-options"
          name="placeId"
          onChange={(e) => handleMuseumChange(e)}
        >
          <option value="Select a Museum">Select a Museum</option>
          {museumData.museums.map((museum) => (
            <option key={museum.name} value={museum.placeId}>
              {museum.name}
            </option>
          ))}
        </select>

        <div className="date-picker-styling">
          <DatePicker
            selected={museumValues.date}
            onChange={(date) => handleDateChange(date)}
            // value={museumValues.date}
          />
        </div>

        <select
          className="booking-options"
          name="time"
          onChange={(e) => handleMuseumChange(e)}
        >
          <option value={null}>Select a Time</option>
          <option value="10:00am">10:00am</option>
          <option value="11:00am">11:00am</option>
          <option value="12:00pm">12:00pm</option>
          <option value="1:00pm">1:00pm</option>
          <option value="2:00pm">2:00pm</option>
          <option value="3:00pm">3:00pm</option>
          <option value="4:00pm">4:00pm</option>
          <option value="5:00pm">5:00pm</option>
        </select>

        <select
          className="booking-options"
          name="people"
          onChange={(e) => handleMuseumChange(e)}
        >
          <option value={null}>Select the Number of People</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>

        <button
          className="booking-button"
          onClick={() => bookTrip(museumValues)}
        >
          {console.log({ museumValues })}
          Book a Field Trip
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
