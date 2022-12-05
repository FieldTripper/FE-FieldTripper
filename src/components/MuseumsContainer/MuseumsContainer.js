import React, {useState} from 'react'
import MuseumCard from '../MuseumCard/MuseumCard'
import QueryResult from '../QueryResult/QueryResult';
import { useQuery, gql } from '@apollo/client';

const MUSEUMS_QUERY = gql`
  query museums{
    museums(placeId: "ChIJb13H9tx4bIcRPQoWtgSMyKk") {
     name
        rating
        placeId
        latitude
        longitude
    }
  }
`;

function MuseumsContainer({museums}) {
  const {loading, error, data} = useQuery(museums)
  console.log(data)

  return (
    <QueryResult error={error} loading={loading} data={data}>

      {/* <MuseumCard museums={museums}/> */}
    </QueryResult>
  )
}

export default MuseumsContainer