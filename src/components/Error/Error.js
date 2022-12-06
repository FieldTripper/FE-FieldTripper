import { Link } from 'react-router-dom';

function Error() {
  return (
    <section className="page--container column">
      <p>404: This page does not exist. Try returning to the homepage.</p>
      <Link to='/'>  
        <button className="search-button">Return Home</button>
      </Link>
    </section>
  )
}

export default Error;