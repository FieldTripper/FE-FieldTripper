import React from "react";
import Error from '../Error/Error';

const QueryResult = ({loading, error, data, children}) => {
  if (data) return children
  if (loading) return <p>Loading...</p>
  if (error) return <Error errorMessage={`${error} We were not able to retrieve data for you.`} />
}

export default QueryResult
