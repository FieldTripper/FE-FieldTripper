import React from 'react'
import './TripType.css'

const TripType = () => {
    return (
        <div className='trip-type'>
            <p className='choose'>Choose Your Trip Type</p>
            <button className='trip-host'>Host A Trip</button>
            <button className='trip-join'>Join A Trip</button>
        </div>
    )
}
export default TripType