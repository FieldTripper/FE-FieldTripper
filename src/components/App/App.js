import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm';
import MuseumsContainer from '../MuseumsContainer/MuseumsContainer';
import Footer from '../Footer/Footer'
import Error from '../Error/Error';
import MuseumInfo from '../MuseumInfo/MuseumInfo';
import BookingForm from "../BookingForm/BookingForm";
import About from '../About/About'
import TripType from "../TripType/TripType"
import singleMuseumData from '../../testData/singleMuseumData'
import "./App.css";

function App() {
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
        <Route path="/" element={<SearchForm updateSearch={updateSearch} />} />
        <Route path="/about" element={<About about={About} />} />
        <Route path="/trip-type" element={<TripType tripType={TripType} />} />
        <Route path="/museums" element={<MuseumsContainer queryValues={values} />} />
        <Route path="/booking-form" element={<BookingForm bookTrip={bookTrip} />} />
        <Route path='/museums/:name' element={<MuseumInfo singleMuseumData={singleMuseumData}/>} />
        <Route path="*" element={<Error errorMessage={errorMessage} />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
