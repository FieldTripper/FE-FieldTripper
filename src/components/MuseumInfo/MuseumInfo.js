import { useQuery, gql } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import QueryResult from "../QueryResult/QueryResult";
import './MuseumInfo.css'

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
  const {placeId} = useParams()

  const { loading, error, data } = useQuery(MUSEUM_QUERY, {
    variables: {
      placeId: placeId
    },
  });

  const formatPrice = (priceNumber) => {
    if(priceNumber === 0) {
      return "Free"
    } else if (priceNumber === 1) {
      return "$"
    } else if (priceNumber === 2) {
      return "$$"
    } else if (priceNumber === 3) {
      return "$$$"
    } else {
      return "$$$$"
    }
  }

  const wheelchairAccessible = (isAccessible) => {
    if(isAccessible) {
      return "Yes"
    } else {
      return "No"
    }
  }

const formatAddress = (address) => {
  const newAddress1 = address.replaceAll('<span class="street-address">', "")
  const newAddress2 = newAddress1.replaceAll('<span class="locality">', "")
  const newAddress3 = newAddress2.replaceAll('<span class="region">', "")
  const newAddress4 = newAddress3.replaceAll('<span class="postal-code">', "")
  const newAddress5 = newAddress4.replaceAll('<span class="country-name">', "")
  const newAddress6 = newAddress5.replaceAll('</span>', "")
  return newAddress6
}

  return (
    <QueryResult error={error} loading={loading} data={data}>
      <section>
        {loading ? <p>Please Wait</p> :
          <>
            <h1>{data.museum.name}</h1>

            {data.museum.address && (
              <h2>
                Address: {formatAddress(data.museum.address)}
              </h2>
            )}

            {data.museum.imageUrl && (
              <img src={data.museum.imageUrl} alt={data.museum.imageDescription} width="500" height="600"/>
            )}

            {data.museum.rating && data.museum.rating > 0 ?(
              <h3>Rating: {data.museum.rating}/5</h3>
            ) : <></>}

            {data.museum.totalRatings && data.museum.totalRatings > 0 ? (
              <h3>Total Ratings: {data.museum.totalRatings}</h3>
            ) : <></>}

            {data.museum.price && (
                <h3>Price: {formatPrice(data.museum.price)}</h3>
            )}

            {data.museum.wheelchairAccessibleEntrance && (
              <h3>Wheelchair Accessible: {wheelchairAccessible(data.museum.wheelchairAccessibleEntrance)}</h3>
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
          </>
        }
      </section>
    </QueryResult>
  )
}

export default MuseumInfo