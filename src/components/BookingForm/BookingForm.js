import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./BookingForm.css";
import museumsData from "../../testData/museumsData";
// import singleMuseumData from "../../testData/singleMuseumData";

const BookingForm = ({ bookTrip, data }) => {
  // console.log(bookTrip);
  console.log({ data });
  let [museumValues, setMuseumValues] = useState({
    museum: "",
    date: "",
    time: "",
    people: "",
  });

  let handleMuseumChange = (e) => {
    const fieldOption = e.target;
    setMuseumValues({ ...museumValues, [fieldOption.name]: fieldOption.value });
  };

  return (
    <section className="booking-page">
      <h2>Book a Field Trip</h2>
      <form className="booking-form">
        <select
          className="booking-options"
          name="museum"
          onChange={(e) => handleMuseumChange(e)}
        >
          <option value="Select a Museum">Select a Museum</option>
          {museumsData.museums.map((museum) => (
            <option key={museum.name} value={museum}>
              {museum.name}
            </option>
          ))}
        </select>

        <input
          className="booking-options"
          type="date"
          id="start"
          name="trip-start"
          value="2022-07-22"
          min="2022-12-01"
          max="2024-12-31"
          onChange={(e) => handleMuseumChange(e)}
        ></input>

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
          Book a Field Trip
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
