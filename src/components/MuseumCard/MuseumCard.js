import React from "react";

function MuseumCard({ data }) {
  let cards;
  
  if (data) {
    cards = data.data.map(museum => {
      return <p>{museum}</p>
    });
  } else {
    cards = <p>Nope</p>
  }
  

  return (
    <div>
      {cards}
    </div>
  )
}

export default MuseumCard