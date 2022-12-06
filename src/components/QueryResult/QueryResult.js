import React from "react";
import Error from '../Error/Error';

const QueryResult = ({loading, error, data, children}) => {
  if(error){
    return <Error errorMessage={`${error} We were not able to retrieve data for you.`} />
  }
  if(data) {
    return children
  }
}

export default QueryResult
