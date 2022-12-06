import React from 'react'
import './Header.css'
import logo from '../../images/logo.png'
import { Link } from "react-router-dom";

const Header = () => {
    return (
    <Link className='header' to='/'>
            <img src={logo} alt="logo" className="logo" />
    </Link>
    )
}
export default Header