import { useNavigate } from "react-router";
import './SignOut.css';
import PropTypes from 'prop-types';

function SignOut({ setUser }) {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.clear();
    setUser({});
    navigate("/");
  }

  return (
    <button  className="sign-out--button" onClick={() => handleSignOut()}>
      Sign Out
    </button>
  )
}

export default SignOut;