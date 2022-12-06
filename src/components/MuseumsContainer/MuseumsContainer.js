import React, {useState} from 'react'
import { useQuery, gql } from '@apollo/client';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

import MuseumCard from '../MuseumCard/MuseumCard';
import Map from '../Map/Map';
import Marker from '../Marker/Marker';

import QueryResult from '../QueryResult/QueryResult';

// import museumsData from '../../testData/museumsData';

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
  const {loading, error, data} = useQuery(MUSEUMS_QUERY, { 
    variables: { city: "Denver", state: "CO", zipcode: "80202" }
  })
  console.log({loading})
  console.log({data})
  console.log({error})
  console.log({MUSEUMS_QUERY})

  const render = (Status) => {
    return <h1>{Status}</h1>;
  };

  return (
    <>
      <QueryResult error={error} loading={loading} data={data}>
        <Wrapper apiKey={process.env.REACT_APP_MATTS_API_KEY} render={render}>
          <Map data={data} >
            <Marker />
          </Map>
        </Wrapper>
        {/* <MuseumCard data={data} /> */}
      </QueryResult>
    </>
  )
    
   
}

export default MuseumsContainer