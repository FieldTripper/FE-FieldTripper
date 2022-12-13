import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import BaseForm from "../BaseForm/BaseForm";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import SearchForm from "../SearchForm/SearchForm";
import MuseumsContainer from "../MuseumsContainer/MuseumsContainer";
import Footer from "../Footer/Footer";
import Error from "../Error/Error";
import MuseumInfo from "../MuseumInfo/MuseumInfo";
import BookingForm from "../BookingForm/BookingForm";
import About from "../About/About";
import TripType from "../TripType/TripType";
import singleMuseumData from "../../testData/singleMuseumData";
import UserSavedTrips from "../UserSavedTrips/UserSavedTrips";
import ExistingTrips from "../ExistingTrips/ExistingTrips";
import { manageLocalData } from "../../utilities/utilities";
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
  const [museumData, setMuseumData] = useState("");

  useEffect(() => {
    manageLocalData("userData", setUser);
  }, []);

  const updateSearch = (values) => {
    setSearchTerms({
      city: values.city,
      state: values.state,
      zipCode: values.zipCode,
    });
  };

  const goToBookingForm = (values) => {
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
        <Route path="/" element={<BaseForm setUser={setUser} />} />
        <Route path="/login" element={<LoginForm setUser={setUser} />} />
        <Route path="/sign-up" element={<SignUpForm setUser={setUser} />} />
        <Route
          path="/museums"
          element={
            <MuseumsContainer
              queryValues={values}
              updateSearch={updateSearch}
              setMuseumData={setMuseumData}
            />
          }
        />
        <Route
          path="/trip-type"
          element={<TripType tripType={TripType} user={user} />}
        />
        <Route
          path="/booking-form"
          element={
            <BookingForm
              bookTrip={goToBookingForm}
              museumData={museumData}
              user={user}
            />
          }
        />
        <Route
          path="/search-form"
          element={<SearchForm updateSearch={updateSearch} />}
        />
        <Route path="/about" element={<About about={About} />} />
        <Route
          path="/museums/:placeId"
          element={
            <MuseumInfo
              singleMuseumData={singleMuseumData}
              bookTrip={goToBookingForm}
            />
          }
        />
        <Route path="/existing-trips" element={<ExistingTrips user={user} />} />
        <Route path="/saved-trips" element={<UserSavedTrips user={user} />} />
        <Route path="*" element={<Error errorMessage={errorMessage} />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
