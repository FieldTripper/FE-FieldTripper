import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BookingForm.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation } from "@apollo/client";
import { CREATE_TRIP_MUTATION } from "../../queries/queries";

const BookingForm = ({ bookTrip, museumData, user }) => {
  const [newStartDate, setStartDate] = useState(new Date());

  const [createTrip] = useMutation(CREATE_TRIP_MUTATION);
  console.log({ user });

  let [museumValues, setMuseumValues] = useState({
    // isHost: true,
    // userName: user.name,
    userId: user.id,
    name: "",
    destinationName: "",
    destinationPlaceId: "",
    startDate: newStartDate,
    startTime: "",
    // attendees: "",
    maxAttendees: "",
  });

  const handleAddTrip = ({
    userId,
    name,
    destinationName,
    destinationPlaceId,
    startDate,
    startTime,
    // attendees,
    maxAttendees,
  }) => {
    createTrip({
      variables: {
        userId: userId,
        name: name,
        destinationName: destinationName,
        destinationPlaceId: destinationPlaceId,
        startDate: startDate,
        startTime: startTime,
        // attendees: parseInt(attendees),
        maxAttendees: parseInt(maxAttendees),
      },
    });
  };
  console.log({ museumValues });
  const checkDestination = (name, fon, fov) => {
    const foundMuseum = museumData.museums.find((museum) => {
      return museum.name === name;
    });
    if (foundMuseum.placeId !== museumValues.destinationPlaceId) {
      const newMuseum = museumData.museums.find((museum) => {
        return museumValues.destinationPlaceId === museum.placeId;
      });
      setMuseumValues({ ...museumValues, destinationName: newMuseum.name });
    } else {
      setMuseumValues({ ...museumValues, [fon]: fov });
    }
  };

  let handleMuseumChange = (e) => {
    const fieldOption = e.target;

    setMuseumValues({ ...museumValues, [fieldOption.name]: fieldOption.value });
    if (!museumValues.destinationName && museumValues.destinationPlaceId) {
      const name = museumData.museums.find((museum) => {
        return museum.placeId === museumValues.destinationPlaceId;
      });
      setMuseumValues({ ...museumValues, destinationName: name.name });
    } else {
      checkDestination(
        museumValues.destinationName,
        fieldOption.name,
        fieldOption.value
      );
    }
  };

  let handleDateChange = (startDate) => {
    setMuseumValues({ ...museumValues, ...{ startDate: startDate } });
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
          {museumData.museums.map((museum) => (
            <option key={museum.name} value={museum.placeId}>
              {museum.name}
            </option>
          ))}
        </select>

        <div className="date-picker-styling">
          <DatePicker
            selected={museumValues.startDate}
            onChange={(startDate) => handleDateChange(startDate)}
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
            onClick={() => handleAddTrip(museumValues)}
          >
            Book a Field Trip
          </button>
        </Link>
      </form>
    </section>
  );
};

export default BookingForm;
