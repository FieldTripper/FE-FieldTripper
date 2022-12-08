import React from 'react'
import './Header.css'
import logo from '../../images/logo.png'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'> <img src={logo} alt="logo" className="logo" />
            </Link>
        </div>
    )
}
export default Header