import React from 'react'
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <Link to='/'>
                <p className='home'>HOME</p>
            </Link>
            <Link to='/About'>
            <p className='about'>ABOUT</p>
            </Link>
        </div>
    )
}
export default Footer