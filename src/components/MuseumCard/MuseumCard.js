import React from "react";
import { Link } from "react-router-dom";
// import "./MuseumCard.css";
import "./MuseumCard.css";

function MuseumCard({ data }) {
  let cards;

  if (data) {
    cards = data.museums.map((museum) => {
      return (
        <Link to="/museums/:placeId">
          <section className="museums-card">
            <div className="card-info">
              <h3>{museum.name}</h3>
              <h4>{museum.rating}</h4>
            </div>
            <div className="museum-image">🏙️</div>
          </section>
        </Link>
      );
    });
  } else {
    cards = <p>Nope</p>;
  }

  return <div>{cards}</div>;
}

export default MuseumCard;
