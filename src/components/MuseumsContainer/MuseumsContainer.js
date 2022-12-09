import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Link } from "react-router-dom";
import QueryResult from "../QueryResult/QueryResult";
import MuseumCard from "../MuseumCard/MuseumCard";
import Map from "../Map/Map";
import LocationPin from "../LocationPin/LocationPin";
import "./MuseumsContainer.css";
import BookingForm from "../BookingForm/BookingForm";

// import museumsData from "../../testData/museumsData";

const MUSEUMS_QUERY = gql`
  query Museums($city: String!, $state: String!, $zipcode: String!) {
    museums(city: $city, state: $state, zipcode: $zipcode) {
      placeId
      name
      rating
      latitude
      longitude
    }
  }
`;

function MuseumsContainer({ queryValues }) {
  const [museumData, setMuseumData] = useState([]);

  const { loading, error, data } = useQuery(MUSEUMS_QUERY, {
    variables: {
      city: queryValues.city,
      state: queryValues.state,
      zipcode: queryValues.zipCode,
    },
  });

  const parentToChild = () => {
    console.log({ data });
    setMuseumData([...museumData], data);
    console.log({ museumData });
  };

  // const bookingForm = data.museums.map((museum) => (
  //   <BookingForm name={museum.name} placeId={museum.placeId} />
  // ));

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
            primary
            onClick={() => parentToChild()}
            // data={data}
            // bookingForm={<BookingForm parentToChild={data} />}
            className="go-book-trip"
          >
            Book Trip
          </button>
        </Link>
        {/* {bookingForm} */}
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
