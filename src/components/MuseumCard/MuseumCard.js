import React from "react";

function MuseumCard({museums}) {
  const cards = museums.map(museum => {
    return <p>{museum}</p>
  })
  return (
    <div>
      {cards}
    </div>
  )
}

export default MuseumCard