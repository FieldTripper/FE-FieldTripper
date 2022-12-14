import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BookingForm.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation } from "@apollo/client";
import { CREATE_TRIP_MUTATION, USER_TRIPS_QUERY } from "../../queries/queries";

const BookingForm = ({ museumData, user }) => {
  let [museumValues, setMuseumValues] = useState({
    userId: user.id,
    name: "",
    destinationName: "",
    destinationPlaceId: "",
    startDate: new Date(),
    startTime: "",
    maxAttendees: "",
  });

  const [createTrip] = useMutation(CREATE_TRIP_MUTATION);

  const handleAddTrip = () => {
    createTrip({
      variables: {
        ...museumValues,
        maxAttendees: parseInt(museumValues.maxAttendees)
      }, refetchQueries: [
        {query: USER_TRIPS_QUERY},
        'UserTrips'
      ]
    });
  };

  let handleMuseumChange = (e) => {
    const fieldOption = e.target;
    if (fieldOption.name === "destinationPlaceId") {
      let selectedMuseum = museumData.find((museum) => {
        return museum.placeId === fieldOption.value
      })
      setMuseumValues({ ...museumValues, [fieldOption.name]: fieldOption.value, destinationName: selectedMuseum.name});
    } else {
      setMuseumValues({ ...museumValues, [fieldOption.name]: fieldOption.value });
    }
  };

  return (
    <section className="booking-page">
      <p className="book-trip">Book a Field Trip</p>
      <form className="booking-form">
        <input
          className="name-your-trip"
          type="text"
          placeholder="Name your trip"
          name="name"
          value={museumValues.name}
          onChange={(e) => handleMuseumChange(e)}
        />
        <select
          className="booking-options"
          name="destinationPlaceId"
          onChange={(e) => handleMuseumChange(e)}
        >
          <option value="Select a Museum">Select a Museum</option>
          {museumData.map((museum) => (
            <option key={museum.name} value={museum.placeId}>
              {museum.name}
            </option>
          ))}
        </select>

        <div className="date-picker-styling">
          <DatePicker
            selected={museumValues.startDate}
            onChange={(startDate) => setMuseumValues({ ...museumValues, startDate: startDate })}
          />
        </div>

        <select
          className="booking-options"
          name="startTime"
          value={museumValues.startTime}
          onChange={(e) => handleMuseumChange(e)}
        >
          <option value={null}>Select a Time</option>
          <option value="7:00am">7:00am</option>
          <option value="8:00am">8:00am</option>
          <option value="9:00am">9:00am</option>
          <option value="10:00am">10:00am</option>
          <option value="11:00am">11:00am</option>
          <option value="12:00pm">12:00pm</option>
          <option value="1:00pm">1:00pm</option>
          <option value="2:00pm">2:00pm</option>
          <option value="3:00pm">3:00pm</option>
          <option value="4:00pm">4:00pm</option>
          <option value="5:00pm">5:00pm</option>
          <option value="6:00pm">6:00pm</option>
          <option value="7:00pm">7:00pm</option>
          <option value="8:00pm">8:00pm</option>
        </select>

        <select
          className="booking-options"
          name="maxAttendees"
          onChange={(e) => handleMuseumChange(e)}
        >
          <option value={Number}>
            Select the Max amount of People at your Event
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
        </select>
        <Link to="/saved-trips">
          <button
            className="booking-button"
            onClick={() => handleAddTrip()}
          >
            Book a Field Trip
          </button>
        </Link>
      </form>
    </section>
  );
};

export default BookingForm;
