import React, {useState} from 'react'
import MuseumCard from '../MuseumCard/MuseumCard'
import QueryResult from '../QueryResult/QueryResult';
import { useQuery, gql } from '@apollo/client';

const MUSEUMS_QUERY = gql`
  
    museums(city: "Denver", state: "CO", zipcode: "80202") {
     name
        rating
        placeId
        latitude
        longitude
    }
  
`;

function MuseumsContainer({museums}) {
    const {loading, error, data} = useQuery(MUSEUMS_QUERY)
    console.log(data)
  

  return (
    <QueryResult error={error} loading={loading} data={data}>
      {console.log(data)}
      {/* <MuseumCard museums={museums}/> */}
    </QueryResult>
  )
}

export default MuseumsContainer