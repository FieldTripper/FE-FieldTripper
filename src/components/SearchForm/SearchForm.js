import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";

function SearchForm({ updateSearch }) {
  const [values, setValues] = useState({ city: "", state: "", zipCode: "" });
  const [warning, setWarning] = useState("");
  
  const navigate = useNavigate();

  const handleChange = (event) => {
    const fieldInput = event.target;
    setValues({ ...values, [fieldInput.name]: fieldInput.value });
  };

  const validateSearch = (event) => {
    event.preventDefault();

    if (!values.city || !values.state) {
      setWarning("Sorry, you need to fill in both City and State")
    } else {
      updateSearch(values);
      setWarning("")
      navigate("/museums");
    }
  }

  return (
    <section className="page--container column">
      <div className="search-housing">
        <h2 className="search-museums">Search Museums</h2>
        <p className="warning-message">{warning}</p>
        <form onSubmit={(event) => validateSearch(event)}>
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
            placeholder="Zip Code (optional)"
            onChange={(event) => handleChange(event)}
            value={values.zipCode}
          />
          <button
            className="primary--button search--button"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
