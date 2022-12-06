import React from "react"

const QueryResult = ({loading, error, data, children}) => {
  if(error){
    return <p>Error: {error.message}</p>
  }
  if(data) {
    return children
  }
}

export default QueryResult
