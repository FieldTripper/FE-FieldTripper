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
      wheelchairAccessibleEntrance
      imageUrl
      imageDescription
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

        {data.museum.address && (
          <h2>{data.museum.address}</h2>
        )}

        {data.museum.imageUrl && (
          <img src={data.museum.imageUrl} alt={data.museum.imageDescription} width="500" height="600"/>
        )}

        {data.museum.rating && (
          <h3>Rating: {data.museum.rating}/5</h3>
        )}

        {data.museum.totalRatings && (
          <h3>Total Ratings: {data.museum.totalRatings}</h3>
        )}

        {data.museum.price && (
            <h3>Price: {data.museum.price}</h3>
        )}

        {data.museum.wheelchairAccessibleEntrance && (
          <h3>Wheelchair Accessible: {data.museum.wheelchairAccessibleEntrance}</h3>
        )}

        {data.museum.combinedHoo && (
          <ul>
          {data.museum.combinedHoo.map((day) => (
            <li key={day}>{day}</li>
          ))}
          </ul>
        )}

        {data.museum.website && (
          <a href={data.museum.website}>{data.museum.website}</a> 
          )}
       
       
      </section>
    </QueryResult>

  )
}

export default MuseumInfo