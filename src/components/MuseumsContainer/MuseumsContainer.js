import React, { useState, useEffect } from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import QueryResult from "../QueryResult/QueryResult";
import MuseumCard from "../MuseumCard/MuseumCard";
import Map from "../Map/Map";
import LocationPin from "../LocationPin/LocationPin";
import "./MuseumsContainer.css";
import { MUSEUMS_QUERY } from "../../queries/queries";

function MuseumsContainer({ queryValues, setMuseumData }) {
  const { loading, error, data } = useQuery(MUSEUMS_QUERY, {
    variables: {
      city: queryValues.city,
      state: queryValues.state,
      zipcode: queryValues.zipCode,
    },
  });

  useEffect(() => {
    setMuseumData(data);
  }, [data]);

  return (
    <section className="page--container row">
      <QueryResult error={error} loading={loading} data={data}>
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
