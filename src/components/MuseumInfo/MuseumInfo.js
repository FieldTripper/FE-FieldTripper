import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useQuery, gql } from "@apollo/client";
import { MUSEUM_QUERY } from "../../queries/queries";
import QueryResult from "../QueryResult/QueryResult";
import "./MuseumInfo.css";

function MuseumInfo() {
  const { placeId } = useParams();

  const { loading, error, data } = useQuery(MUSEUM_QUERY, {
    variables: {
      placeId: placeId,
    },
  });

  const formatPrice = (priceNumber) => {
    if (priceNumber === '0') {
      return "Free";
    } else if (priceNumber === 1) {
      return "$";
    } else if (priceNumber === 2) {
      return "$$";
    } else if (priceNumber === 3) {
      return "$$$";
    } else {
      return "$$$$";
    }
    
  };

  const wheelchairAccessible = (isAccessible) => {
    if (isAccessible) {
      return "Yes";
    } else {
      return "No";
    }
  };

  const formatAddress = (address) => {
    const newAddress1 = address.replaceAll('<span class="street-address">', "");
    const newAddress2 = newAddress1.replaceAll('<span class="locality">', "");
    const newAddress3 = newAddress2.replaceAll('<span class="region">', "");
    const newAddress4 = newAddress3.replaceAll(
      '<span class="postal-code">',
      ""
    );
    const newAddress5 = newAddress4.replaceAll(
      '<span class="country-name">',
      ""
    );
    const newAddress6 = newAddress5.replaceAll(
      '<span class="extended-address">',
      ""
    );
    const newAddress7 = newAddress6.replaceAll("</span>", "");
    return newAddress7;
  };

  return (
    <QueryResult error={error} loading={loading} data={data}>
      <section className="museum-info-container">
        {loading ? (
          <p>Please Wait</p>
        ) : (
          <>
            <h1>{data.museum.name}</h1>
            <br></br>
            {data.museum.website && (
              <a href={data.museum.website}>{data.museum.website}</a>
            )}

            {data.museum.address && (
              <p className="address">{formatAddress(data.museum.address)}</p>
            )}

            {data.museum.imageUrl && (
              <img
                className="museum-image-info"
                src={data.museum.imageUrl}
                alt={data.museum.imageDescription}
              />
            )}

            {data.museum.rating && data.museum.rating > 0 ? (
              <h3>
                <b>Rating:</b> {data.museum.rating}/5
              </h3>
            ) : (
              <></>
            )}

            {data.museum.totalRatings && data.museum.totalRatings > 0 ? (
              <h3>
                <b>Total Ratings:</b> {data.museum.totalRatings}
              </h3>
            ) : (
              <></>
            )}

            {data.museum.price && (
              <h3>
                <b>Price:</b> {formatPrice(data.museum.price)}
              </h3>
            )}

            {data.museum.wheelchairAccessibleEntrance && (
              <h3>
                <b>Wheelchair Accessible:</b>{" "}
                {wheelchairAccessible(data.museum.wheelchairAccessibleEntrance)}
              </h3>
            )}

            {data.museum.combinedHoo && data.museum.combinedHoo.length > 0 ? (
              <h3>
                <b>Hours:</b>
              </h3>
            ) : (
              <></>
            )}

            {data.museum.combinedHoo && (
              <p>
                {data.museum.combinedHoo.map((day) => (
                  <p className="hours" key={day}>
                    {day}
                  </p>
                ))}
              </p>
            )}
          </>
        )}
        <Link to="/booking-form">
          <button className="go-book-trip">Book Trip</button>
        </Link>
      </section>
    </QueryResult>
  );
}

export default MuseumInfo;
