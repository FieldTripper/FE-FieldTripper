import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import MuseumCard from "../MuseumCard/MuseumCard";
import Map from "../Map/Map";

import QueryResult from "../QueryResult/QueryResult";

import museumsData from "../../testData/museumsData";
// import { MATTS_API_KEY } from "../../secret";

const MUSEUMS_QUERY = gql`
<<<<<<< HEAD
  {
    museums(city: "Denver", state: "CO", zipcode: "80202") {
=======
  query Museums($city: String!, $state: String!, $zipcode: String!) {
    museums(city: $city, state: $state, zipcode: $zipcode) {
>>>>>>> 1bdcd2529c169673ed47408ab4451608ec713e95
      placeId
      name
      rating
      latitude
      longitude
    }
  }
`;

<<<<<<< HEAD
// query: "{
//   museums(city: "Denver", state: "CO", zipcode: "80202") {
//       placeId
//       name
//       rating
//       latitude
//       longitude
//   }
// }"

function MuseumsContainer() {
  const { loading, error, data } = useQuery(MUSEUMS_QUERY);
  console.log({ loading });
  console.log({ data });
  console.log({ error });
=======
const SPOTIFY_QUERY = gql`
  query getByArtist($name: String!) {
    queryArtists (byName: $name) {
      name
      image
      albums {
          name
      }
    }
  }
`;

function MuseumsContainer() {
  const {loading, error, data} = useQuery(MUSEUMS_QUERY, { 
    variables: { city: "Denver", state: "CO", zipcode: "80202" }
  })

  // const {loading, error, data} = useQuery(MUSEUMS_QUERY, { 
  //   variables: { "name": "Beach Boys"} 
  // })
  console.log({loading})
  console.log({data})
  console.log({error})
  console.log({MUSEUMS_QUERY})
  console.log({SPOTIFY_QUERY})


>>>>>>> 1bdcd2529c169673ed47408ab4451608ec713e95

  const render = (Status) => {
    return <h1>{Status}</h1>;
  };

  return (
    <>
      <Wrapper apiKey={MATTS_API_KEY} render={render}>
        <Map />
      </Wrapper>
      <QueryResult error={error} loading={loading} data={data}>
<<<<<<< HEAD
        {console.log({ data })}
=======
>>>>>>> 1bdcd2529c169673ed47408ab4451608ec713e95
        {/* <MuseumCard data={data} /> */}
      </QueryResult>
    </>
  );
}

export default MuseumsContainer;
