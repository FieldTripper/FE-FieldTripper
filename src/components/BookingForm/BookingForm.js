import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./BookingForm.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = ({ bookTrip, museumData, user }) => {
  const [startDate, setStartDate] = useState(new Date());
  console.log('MD', { museumData });

  let [museumValues, setMuseumValues] = useState({
    name: "",
    destinationName: "",
    placeId: "",
    date: startDate,
    time: "",
    people: "",
  });

  const checkDestination = (name, fon, fov) => {
    const foundMuseum = museumData.museums.find((museum) => {
     return museum.name === name
    })
    if (foundMuseum.placeId !== museumValues.placeId) {
     const newMuseum = museumData.museums.find((museum) => {
        return museumValues.placeId === museum.placeId
      })
      setMuseumValues({...museumValues, destinationName: newMuseum.name})
    } else {
      setMuseumValues({...museumValues, [fon]: fov })
    }
  }

  console.log('MV', museumValues)
  let handleMuseumChange = (e) => {
    const fieldOption = e.target;
    
    setMuseumValues({ ...museumValues, [fieldOption.name]: fieldOption.value });
    if (!museumValues.destinationName && museumValues.placeId) {
        const name = museumData.museums.find((museum) => {
          return museum.placeId === museumValues.placeId
        })
        setMuseumValues({...museumValues, destinationName: name.name});
    } else {
      checkDestination(museumValues.destinationName, fieldOption.name, fieldOption.value)
    }
    console.log('pid', fieldOption.value)
  };

  let handleDateChange = (date) => {
    setMuseumValues({ ...museumValues, ...{ date: date } });
  };

  return (
    <section className="booking-page">
      <p className='book-trip'>Book a Field Trip</p>
      <form className="booking-form">
        <input className='name-your-trip'
          type="text"
          placeholder="Name your trip"
          name="name"
          value={museumValues.name}
          onChange={(e) => handleMuseumChange(e)}
        />
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
          Book a Field Trip
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
