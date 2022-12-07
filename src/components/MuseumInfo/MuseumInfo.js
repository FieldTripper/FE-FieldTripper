import { useQuery, gql } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import QueryResult from "../QueryResult/QueryResult";

const MUSEUM_QUERY = gql `
  query Museum($placeId: String!) {
    museum(placeId: $placeId) {
      placeId
      name
      rating
      latitude
      longitude
      price
      website
      address
      totalRatings
      separatedHoo
      combinedHoo
    }
  }
`

function MuseumInfo() {
  const {name} = useParams()

  const { loading, error, data } = useQuery(MUSEUM_QUERY, {
    variables: {
      placeId: "ChIJb13H9tx4bIcRPQoWtgSMyKk"
    },
  });
  console.log('data', data)

  return (
    <QueryResult error={error} loading={loading} data={data}>
      <section>
        <h1>{name}</h1>
      </section>
    </QueryResult>

    // <section key={singleMuseumData.placeId} className="museum-info">
    //   <h1>{name}</h1>
    //   <p>{singleMuseumData.museum.rating}</p>
    //   <p>Price Level: {singleMuseumData.museum.price_level}</p>
    // </section>
  )
}

export default MuseumInfo