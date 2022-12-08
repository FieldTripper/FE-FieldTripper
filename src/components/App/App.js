import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import LoginForm from '../LoginForm/LoginForm';
import SearchForm from "../SearchForm/SearchForm";
import BookingForm from "../BookingForm/BookingForm";
import MuseumsContainer from "../MuseumsContainer/MuseumsContainer";
import Footer from '../Footer/Footer';
import About from '../About/About'
import Error from "../Error/Error";
import TripType from "../TripType/TripType"
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  const [values, setSearchTerms] = useState({
    city: "",
    state: "",
    zipCode: "",
  });
  const [errorMessage, setErrorMessage] = useState(
    "404: This page does not exist."
  );

  const updateSearch = (values) => {
    setSearchTerms({
      city: values.city,
      state: values.state,
      zipCode: values.zipCode,
    });
  };

  const bookTrip = (values) => {
    setSearchTerms({
      museum: values.museum,
      time: values.time,
      people: values.people,
    });
  };

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<LoginForm setUser={setUser} />} />
        <Route path='/search' element={<SearchForm updateSearch={updateSearch} />} />
        <Route
          path="/museums"
          element={<MuseumsContainer queryValues={values} />}
        />
        <Route path="/trip-type" element={<TripType tripType={TripType} />} />
        <Route
          path="/booking-form"
          element={<BookingForm bookTrip={bookTrip} />}
        />
        <Route path="/about" element={<About about={About} />} />
        <Route path="*" element={<Error errorMessage={errorMessage} />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
