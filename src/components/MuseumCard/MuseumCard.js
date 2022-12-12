import React from "react";
import { Link } from "react-router-dom";
import "./MuseumCard.css";

function MuseumCard({ data }) {
  let cards;

  if (data) {
    cards = data.museums.map((museum) => {
      return (
        <Link to={`/museums/${museum.placeId}`}>
          <section key={museum.placeId} className="museums-card">
            <div className="card-info">
              <p className='museum-name-card'>{museum.name}</p>
              <h4>{museum.rating}</h4>
            </div>
            <div className="museum-image">🏙️</div>
          </section>
        </Link>
      );
    });
  } else {
    cards = (
      <p>
        Sorry, There are no museums to be displayed. Please search in a
        different area
      </p>
    );
  }

  return <div>{cards}</div>;
}

export default MuseumCard;
