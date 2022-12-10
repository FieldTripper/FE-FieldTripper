import React, { useState, useEffect } from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Link } from "react-router-dom";
import QueryResult from "../QueryResult/QueryResult";
import MuseumCard from "../MuseumCard/MuseumCard";
import Map from "../Map/Map";
import LocationPin from "../LocationPin/LocationPin";
import "./MuseumsContainer.css";
import { MUSEUMS_QUERY } from "../../queries/queries";
import BookingForm from "../BookingForm/BookingForm";

// const MUSEUMS_QUERY = gql`
//   query Museums($city: String!, $state: String!, $zipcode: String!) {
//     museums(city: $city, state: $state, zipcode: $zipcode) {
//       placeId
//       name
//       rating
//       latitude
//       longitude
//     }
//   }
// `;

function MuseumsContainer({ queryValues, setMuseumData }) {
  const { loading, error, data } = useQuery(MUSEUMS_QUERY, {
    variables: {
      city: queryValues.city,
      state: queryValues.state,
      zipcode: queryValues.zipCode,
    },
  });
  console.log(error);

  useEffect(() => {
    console.log({ data });
    setMuseumData(data);
  }, [data]);

  return (
    <section className="page--container row">
      <QueryResult error={error} loading={loading} data={data}>
        {console.log({ data })}
        <MuseumCard data={data} />
        <Map data={data}>
          <LocationPin data={data} />
        </Map>
        <Link to="/booking-form">
          <button
            // primary
            // onClick={() => handleBookingClick()}
            // data={data}
            // bookingForm={<BookingForm sendDataToBooking={data} />}
            className="go-book-trip"
          >
            Book Trip
          </button>
        </Link>
        {/* {console.log({ museumData })} */}
      </QueryResult>
      {/* <MuseumCard data={museumsData} />
      <Wrapper apiKey={process.env.REACT_APP_MATTS_API_KEY} render={render}>
        <Map data={museumsData}>
          <Marker />
        </Map>
      </Wrapper> */}
    </section>
  );
}

export default MuseumsContainer;
