import React, {useState} from "react";
import {Link} from 'react-router-dom'

function SearchForm({updateSearch}) {

  const [values, setValues] = useState({city: ''})

  const handleChange = (event) => {
    const fieldInput = event.target
    setValues({city: fieldInput.value})
  }


  return (
    <form>
      <input 
        type='text'
        name='city'
        placeholder="Enter city you want to search"
        onChange={(event) => handleChange(event)}
        value={values.city}
      />
      <Link to='/museums'>

        <button onClick={() => updateSearch()}>Submit</button>
      </Link>

    </form>
  )
}

export default SearchForm