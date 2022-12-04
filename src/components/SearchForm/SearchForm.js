import React, {useState} from "react";

function SearchForm() {

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
      <button onClick={}>Submit</button>
    </form>
  )
}

export default SearchForm