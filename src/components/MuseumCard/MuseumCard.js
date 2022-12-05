import React from "react";
import "./MuseumCard.css";

function MuseumCard({ data }) {
  let cards;

  if (data) {
    cards = data.museums.map((museum) => {
      return (
        <section className="museums-card">
          <div className="card-info">
            <h3>{museum.name}</h3>
            <h4>{museum.rating}</h4>
          </div>
          <div>🏙️</div>
        </section>
      );
    });
  } else {
    cards = <p>Nope</p>;
  }

  return <div>{cards}</div>;
}

export default MuseumCard;
