import React, {useState} from "react";
import {Link} from 'react-router-dom';

function SearchForm({updateSearch}) {

  const [values, setValues] = useState({city: '', state: '', zipCode: ''})

  const handleChange = (event) => {
    const fieldInput = event.target
    setValues({...values, [fieldInput.name]: fieldInput.value})
  }

  return (
    <form>
      <input 
        type='text'
        name='city'
        placeholder="Enter city"
        onChange={(event) => handleChange(event)}
        value={values.city}
      />
         <input 
        type='text'
        name='state'
        placeholder="Enter state"
        onChange={(event) => handleChange(event)}
        value={values.state}
      />
         <input 
        type='text'
        name='zipCode'
        placeholder="Enter zip code"
        onChange={(event) => handleChange(event)}
        value={values.zipCode}
      />
      <Link to='/museums'>
        <button onClick={() => updateSearch(values)}>Submit</button>
      </Link>
    </form>
  )
}

export default SearchForm