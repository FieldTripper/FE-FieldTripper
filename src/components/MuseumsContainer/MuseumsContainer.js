import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import QueryResult from "../QueryResult/QueryResult";
import MuseumCard from "../MuseumCard/MuseumCard";
import Map from "../Map/Map";
import Marker from "../Marker/Marker";
import "./MuseumsContainer.css";

import museumsData from "../../testData/museumsData";

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
  const { loading, error, data } = useQuery(MUSEUMS_QUERY, {
    variables: {
      city: queryValues.city,
      state: queryValues.state,
      zipcode: queryValues.zipCode,
    },
  });

  console.log(data);
  console.log({ queryValues });
  const render = (Status) => {
    return <h1>{Status}</h1>;
  };

  return (
    <section className="page--container row">
      {/* <QueryResult error={error} loading={loading} data={data}>
        <MuseumCard data={data} />
        <Wrapper apiKey={process.env.REACT_APP_MATTS_API_KEY} render={render}>
          <Map data={data}>
            <Marker />
          </Map>
        </Wrapper>
      </QueryResult> */}
      <MuseumCard data={museumsData} />
      <Wrapper apiKey={process.env.REACT_APP_MATTS_API_KEY} render={render}>
        <Map data={museumsData}>
          <Marker />
        </Map>
      </Wrapper>
    </section>
  );
}

export default MuseumsContainer;
