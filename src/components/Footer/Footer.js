import { Link } from "react-router-dom";
import SignOut from "../SignOut/SignOut";
import './Footer.css'

const Footer = ({ user, setUser }) => {
    if (Object.keys(user).length) {
        return (
            <div className='footer'>
                <Link style={{ textDecoration: 'none' }} to='/trip-type'>
                    <p className='home'>HOME</p>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/saved-trips'>
                    <p className='footer-saved-trips'>SAVED TRIPS</p>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/existing-trips'>
                    <p className='footer-join-a-trip'>JOIN A TRIP</p>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/search-form'>
                    <p className='footer-host-a-trip'>HOST A TRIP</p>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/About'>
                    <p className='footer-about'>ABOUT</p>
                </Link>
                <SignOut setUser={setUser} />
            </div>
        )
    } else {
        return (
            <div className='footer'>
                <Link style={{ textDecoration: 'none' }} to='/About'>
                    <p className='footer-about'>ABOUT</p>
                </Link>
            </div>
        )
    }
}
export default Footer