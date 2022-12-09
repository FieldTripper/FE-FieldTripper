import { useQuery, gql } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import QueryResult from "../QueryResult/QueryResult";
import './MuseumInfo.css'

const MUSEUM_QUERY = gql`
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
  const { placeId } = useParams()

  const { loading, error, data } = useQuery(MUSEUM_QUERY, {
    variables: {
      placeId: placeId
    },
  });
  console.log('data', data)
  console.log('loading', loading)

  const formatPrice = (priceNumber) => {
    if (priceNumber === 1) {
      return "$"
    } else if (priceNumber === 2) {
      return "$$"
    } else if (priceNumber === 3) {
      return "$$$"
    }
  }

  const wheelchairAccessible = (isAccessible) => {
    if (isAccessible) {
      return "Yes"
    } else {
      return "No"
    }
  }

  // const formatAddress = (address) => {
  //   const newAddress = address.split(',').map((span) => {
  //     return span.slice(22)
  //   }). map((span) => {
  //     return span.slice(0, -7)
  //   })
  //   console.log(newAddress)
  //   return newAddress
  // }

  const formatAddress = (address) => {
    console.log(address)
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
      <section className='museum-info-container'>
        {loading ? <p>Please Wait</p> :
          <>
            <h1>{data.museum.name}</h1><br></br>

            {/* <p className='address-title'><b>Address:</b></p><br></br> */}
              {data.museum.address && (
            <p className='address'>
                { formatAddress(data.museum.address)} 
            </p>
            )}

            {data.museum.imageUrl && (
              <img className='museum-image' src={data.museum.imageUrl} alt={data.museum.imageDescription} width="500" height="600" />
            )}

            {data.museum.rating && data.museum.rating > 0 ? (
              <h3><b>Rating:</b> {data.museum.rating}/5</h3>
            ) : <></>}

            {data.museum.totalRatings && data.museum.totalRatings > 0 ? (
              <h3><b>Total Ratings:</b> {data.museum.totalRatings}</h3>
            ) : <></>}

            {data.museum.price && (
              <h3><b>Price:</b> {formatPrice(data.museum.price)}</h3>
            )}

            {data.museum.wheelchairAccessibleEntrance && (
              <h3><b>Wheelchair Accessible:</b> {wheelchairAccessible(data.museum.wheelchairAccessibleEntrance)}</h3>
            )}

            <h3><b>Hours:</b></h3>
            {data.museum.combinedHoo && (
              <p>
                {data.museum.combinedHoo.map((day) => (
                  <p className='hours' key={day}>{day}</p>
                ))}
              </p>
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