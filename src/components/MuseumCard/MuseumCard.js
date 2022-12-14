import { Link } from "react-router-dom";
import "./MuseumCard.css";
import PropTypes from 'prop-types';

function MuseumCard({ museum }) {
  if (museum) {
      return ( 
        <Link to={`/museums/${museum.placeId}`}>
          <section key={museum.placeId} className="museums-card">
            <div className="card-info">
              <p className="museum-name-card">{museum.name}</p>
              <h4>{museum.rating}</h4>
            </div>
            <img
              className="museum-image"
              src={museum.imageUrl}
              alt={`a picture of ${museum.imageDescription}`}
            />
          </section>
        </Link>
      )
  }
   return null
}

export default MuseumCard;

MuseumCard.propTypes = {
  museum: PropTypes.shape({
    __typename: PropTypes.string,
    imageDescription: PropTypes.string,
    imageUrl: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    name: PropTypes.string,
    placeId: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};