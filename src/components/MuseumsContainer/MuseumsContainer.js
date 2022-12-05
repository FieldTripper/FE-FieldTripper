import React, {useState} from 'react'
import { useQuery, gql } from '@apollo/client';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

import MuseumCard from '../MuseumCard/MuseumCard';
import Map from '../Map/Map';

import QueryResult from '../QueryResult/QueryResult';

import museumsData from '../../testData/museumsData';
import { MATTS_API_KEY } from '../../secret';

const MUSEUMS_QUERY = gql`
  {
    museums(city: "Denver", state: "CO", zipcode: "80202") {
     name
        rating
        placeId
        latitude
        longitude
    }
  }
`;

function MuseumsContainer() {
  const {loading, error, data} = useQuery(MUSEUMS_QUERY)
  console.log(data)

  const render = (Status) => {
    return <h1>{Status}</h1>;
  };

  return (
    <>
      <Wrapper apiKey={MATTS_API_KEY} render={render}>
        <Map />
      </Wrapper>
       {/* <QueryResult error={error} loading={loading} data={data}>
        {console.log(data)}
        <MuseumCard museums={museums}/>
      </QueryResult> */}
    </>
  )
    
   
}

export default MuseumsContainer