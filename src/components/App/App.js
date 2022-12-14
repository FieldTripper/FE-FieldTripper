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
import UserSavedTrips from "../UserSavedTrips/UserSavedTrips";
import ExistingTrips from "../ExistingTrips/ExistingTrips";
import { manageLocalData } from "../../utilities/utilities";
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  const [searchTerms, setSearchTerms] = useState({
    city: "",
    state: "",
    zipCode: "",
  });
  const [errorMessage, setErrorMessage] = useState(
    "404: This page does not exist."
  );
  const [museumData, setMuseumData] = useState([]);

  useEffect(() => {
    localStorage.clear();
    manageLocalData("userData", setUser);
    manageLocalData("searchTerms", setSearchTerms);
    manageLocalData("museumData", setMuseumData);
  }, []);

  const updateSearch = (values) => {
    manageLocalData("searchTerms", setSearchTerms, values)
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
              searchTerms={searchTerms}
              updateSearch={updateSearch}
              setMuseumData={setMuseumData}
            />
          }
        />
        <Route
          path="/trip-type"
          element={<TripType user={user} />}
        />
        <Route
          path="/booking-form"
          element={
            <BookingForm
              museumData={museumData}
              user={user}
            />
          }
        />
        <Route
          path="/search-form"
          element={<SearchForm updateSearch={updateSearch} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/museums/:placeId"
          element={<MuseumInfo />}
        />
        <Route path="/existing-trips" element={<ExistingTrips user={user} />} />
        <Route path="/saved-trips" element={<UserSavedTrips user={user} />} />
        <Route path="*" element={<Error errorMessage={errorMessage} />} />
      </Routes>
      <Footer user={user} />
    </main>
  );
}

export default App;
