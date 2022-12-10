import React from 'react'
import { gql, useQuery } from '@apollo/client'
import './ExistingTrips.css'

const ALLTRIPS_QUERY = gql `
    query Trips{
        trips{
            id
            name
            destinationPlaceId
            destinationName
            startTime
        }
    }
`

const ExistingTrips = () => {
    const {loading, error, data} = useQuery(ALLTRIPS_QUERY)

    console.log('loading', loading)
    console.log('data', data)
    console.log('error', error)

    const formatDate = (tripDate) => {
      const newDate = new Date(tripDate).toUTCString().slice(0, -7)
      return newDate
    }

    let trips

    if(data) {
      trips = data.trips.map((trip) => {
        return (
          <section>
            <div key={trip.destinationPlaceId} className='saved-trips'>
              <h1>{trip.name}</h1>
              <h2>{trip.destinationName}</h2>
              <h3>{formatDate(trip.startTime)}</h3>
            </div>
            <button>Join Trip</button>
          </section>
        )
      })
    } else if(error){
      trips = <p>{error.message}</p>
    } else {
      trips = <p>There are no trips at this time. Please return to "Host A Trip" to plan a trip!</p>
    }

    return <>{trips}</>
}
export default ExistingTrips
