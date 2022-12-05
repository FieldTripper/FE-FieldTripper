import React, {useState} from 'react'
import { useQuery, gql } from '@apollo/client';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

import MuseumCard from '../MuseumCard/MuseumCard';
import Map from '../Map/Map';

import QueryResult from '../QueryResult/QueryResult';

import museumsData from '../../testData/museumsData';
import { MATTS_API_KEY } from '../../secret';

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



  const render = (Status) => {
    return <h1>{Status}</h1>;
  };

  return (
    <>
      <Wrapper apiKey={MATTS_API_KEY} render={render}>
        <Map />
      </Wrapper>
      <QueryResult error={error} loading={loading} data={data}>
        {/* <MuseumCard data={data} /> */}
      </QueryResult>
    </>
  )
    
   
}

export default MuseumsContainer