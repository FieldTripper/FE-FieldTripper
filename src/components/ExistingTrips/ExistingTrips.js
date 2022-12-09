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

    return (
        <div className='saved-trips'>
            <p>saved trips here</p>
        </div>

    )
}
export default ExistingTrips
