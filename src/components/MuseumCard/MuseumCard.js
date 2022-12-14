import { Link } from "react-router-dom";
import "./MuseumCard.css";

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
              alt={museum.imageDescription}
            />
          </section>
        </Link>
      )
  }
   return null
}

export default MuseumCard;
