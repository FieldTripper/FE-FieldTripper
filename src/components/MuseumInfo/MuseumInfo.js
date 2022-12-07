import { gql } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";

const MUSEUM_QUERY = gql `
  query Museum($placeId: String!) {
    museum(placeId: $placeId) {
        placeId
        name
        address
        rating
        latitude
        longitude
    }
  }
`

function MuseumInfo() {
  const {placeId} = useParams()

  // const { loading, error, data } = useQuery(MUSEUM_QUERY, {
  //   variables: {
  //     placeId: 
  //   },
  // });

  return (
    <section className="museum-info">
      <h1></h1>
    </section>
  )
}

export default MuseumInfo