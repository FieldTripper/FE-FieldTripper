import { Link } from 'react-router-dom';
import './Error.css';
import PropTypes from 'prop-types';

function Error({ errorMessage }) {
  return (
    <section className="page--container column">
      <h2>{`${errorMessage} Try returning to the homepage.`}</h2>
      <Link to='/trip-type'>  
        <button className="primary--button home--button">Return Home</button>
      </Link>
    </section>
  )
}

export default Error;
Error.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};