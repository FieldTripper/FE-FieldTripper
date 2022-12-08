import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchForm.css";

function SearchForm({ updateSearch }) {
  const [values, setValues] = useState({ city: "", state: "", zipCode: "" });

  const handleChange = (event) => {
    const fieldInput = event.target;
    setValues({ ...values, [fieldInput.name]: fieldInput.value });
  };

  return (
    <section className="page--container column">
      <form>
        <input
          type="text"
          name="city"
          placeholder="Enter City"
          onChange={(event) => handleChange(event)}
          value={values.city}
        />
        <input
          type="text"
          name="state"
          placeholder="Enter State"
          onChange={(event) => handleChange(event)}
          value={values.state}
        />
        <input
          className="zip"
          type="text"
          name="zipCode"
          placeholder="Zip Code (Optional)"
          onChange={(event) => handleChange(event)}
          value={values.zipCode}
        />
        <Link to="/museums">
          <button
            className="primary--button search--button"
            onClick={() => updateSearch(values)}
          >
            Search
          </button>
        </Link>
      </form>
    </section>
  );
}

export default SearchForm;
