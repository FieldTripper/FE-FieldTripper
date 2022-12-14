import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { MUSEUMS_QUERY } from "../../queries/queries";
import QueryResult from "../QueryResult/QueryResult";
import MuseumCard from "../MuseumCard/MuseumCard";
import Map from "../Map/Map";
import LocationPin from "../LocationPin/LocationPin";
import { manageLocalData } from "../../utilities/utilities";
import "./MuseumsContainer.css";

function MuseumsContainer({ queryValues, setMuseumData }) {
  const { loading, error, data } = useQuery(MUSEUMS_QUERY, {
    variables: {
      city: queryValues.city,
      state: queryValues.state,
      zipcode: queryValues.zipCode,
    },
  });

  useEffect(() => {
    if (data) {
      manageLocalData("museumData", setMuseumData, data.museums)
    }
  }, [data]);

  return (
    <section className="museum-container">
      <QueryResult error={error} loading={loading} data={data}>
        <article>
          {
            data?.museums.map((museum, index) => {
              return (
                <MuseumCard key={index} museum={museum} />
              )
            })
          }
        </article>
        <MuseumCard data={data} />
        <Map data={data}>
          <LocationPin data={data} />
        </Map>
        <Link to="/booking-form">
          <button className="go-book-trip">Book Trip</button>
        </Link>
      </QueryResult>
    </section>
  );
}

export default MuseumsContainer;
