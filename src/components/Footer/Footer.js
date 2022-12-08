import React from 'react'
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <Link style={{textDecoration: 'none'}} to='/'>
                <p className='home'>HOME</p>
            </Link>
            <Link style={{textDecoration: 'none'}} to='/About'>
            <p className='about'>ABOUT</p>
            </Link>
        </div>
    )
}
export default Footer