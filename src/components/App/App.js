
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import LoginForm from '../LoginForm/LoginForm';
import SearchForm from "../SearchForm/SearchForm";
import MuseumsContainer from '../MuseumsContainer/MuseumsContainer';
import Footer from '../Footer/Footer'
import Error from '../Error/Error';
import MuseumInfo from '../MuseumInfo/MuseumInfo';
import BookingForm from "../BookingForm/BookingForm";
import About from '../About/About'
import TripType from "../TripType/TripType"
import singleMuseumData from '../../testData/singleMuseumData'
import ExistingTrips from '../ExistingTrips/ExistingTrips'
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
        <Route path="/museums" element={<MuseumsContainer queryValues={values} />} />
        <Route path="/trip-type" element={<TripType tripType={TripType} />} />
        <Route path="/booking-form" element={<BookingForm bookTrip={bookTrip} />} />
        <Route path="/search-form" element={<SearchForm updateSearch={updateSearch} />} />
        <Route path="/about" element={<About about={About} />} />
        <Route path='/museums/:placeId' element={<MuseumInfo singleMuseumData={singleMuseumData}/>} />
        <Route path="/existing-trips" element={<ExistingTrips user={user} /> } />
        <Route path="*" element={<Error errorMessage={errorMessage} />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
