import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import MuseumCard from "../MuseumCard/MuseumCard";
import Map from "../Map/Map";

import QueryResult from "../QueryResult/QueryResult";

// import museumsData from "../../testData/museumsData";
// import { MATTS_API_KEY } from "../../secret";
import "./MuseumsContainer.css";

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

function MuseumsContainer() {
  const { loading, error, data } = useQuery(MUSEUMS_QUERY, {
    variables: { city: "Denver", state: "CO", zipcode: "80202" },
  });
  console.log({ loading });
  console.log({ error });
  console.log({ data });

  const render = (Status) => {
    return <h1>{Status}</h1>;
  };

  return (
    <section className="museums-container">
      <QueryResult error={error} loading={loading} data={data}>
        <MuseumCard data={data} />
      </QueryResult>
      <Wrapper apiKey={MATTS_API_KEY} render={render}>
        <Map />
      </Wrapper>
    </section>
  );
}

export default MuseumsContainer;
