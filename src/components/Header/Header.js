import { Link } from "react-router-dom";
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'> <img src={logo} alt="logo" className="logo" />
            </Link>
        </div>
    )
}
export default Header