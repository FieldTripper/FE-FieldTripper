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

function MuseumInfo({singleMuseumData}) {
  const {name} = useParams()

  // const { loading, error, data } = useQuery(MUSEUM_QUERY, {
  //   variables: {
  //     placeId: 
  //   },
  // });

  return (
    <section key={singleMuseumData.placeId} className="museum-info">
      <h1>{name}</h1>
      <p>{singleMuseumData.museum.rating}</p>
      <p>Price Level: {singleMuseumData.museum.price_level}</p>
    </section>
  )
}

export default MuseumInfo