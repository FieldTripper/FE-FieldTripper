import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MuseumCard from "../MuseumCard/MuseumCard";
import Map from "../Map/Map";
import Marker from '../Marker/Marker';
import QueryResult from "../QueryResult/QueryResult";
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

function MuseumsContainer({ queryValues }) {
  console.log(queryValues);
  const { loading, error, data } = useQuery(MUSEUMS_QUERY, {
    variables: {
      city: queryValues.city,
      state: queryValues.state,
      zipcode: queryValues.zipCode,
    },
  });

  console.log({ loading });
  console.log({ data });
  console.log({ error });
  console.log({ MUSEUMS_QUERY });

  const render = (Status) => {
    return <h1>{Status}</h1>;
  };

  return (
    <section className="museums-container">
      <QueryResult error={error} loading={loading} data={data}>
        <MuseumCard data={data} />
        <Wrapper apiKey={process.env.REACT_APP_MATTS_API_KEY} render={render}>
          <Map data={data} >
            <Marker />
          </Map>
        </Wrapper>
      </QueryResult>
    </section>
  )
}

export default MuseumsContainer;
