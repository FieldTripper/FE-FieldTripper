import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_USER_MUTATION } from "../../queries/mutations";
import { manageLocalData } from "../../utilities/utilities";
import "./SignUpForm.css";
import PropTypes from 'prop-types';

function SignUpForm({ setUser }) {
  const [signUpValues, setSignUpValues] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [createUser, { loading, error, data }] =
    useMutation(CREATE_USER_MUTATION);
  const [warning, setWarning] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (data && data.createUser.user) {
      manageLocalData("userData", setUser, data.createUser.user);
      navigate("/trip-type");
    } else if (data) {
      setWarning("Sorry, we were not able to sign you up. Please try again later.")
    }
  }, [data]);

  const handleChange = (event) => {
    const fieldInput = event.target;
    setSignUpValues({ ...signUpValues, [fieldInput.name]: fieldInput.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isSignUpValid = Object.keys(signUpValues).every(property => signUpValues[property] !== "");

    if (!isSignUpValid) {
      setWarning("Please fill in all fields");
    } else {
      createUser({ variables: signUpValues });
      setWarning("");
    }
  };

  return (
    <section className="page--container column">
      <h2 className="sign-up">Sign Up Form</h2>
      <p className="warning-message">{warning}</p>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          className="sign-up-input"
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={(event) => handleChange(event)}
        />
        <input
          className="sign-up-input"
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={(event) => handleChange(event)}
        />
        <input
          className="sign-up-input"
          type="password"
          name="password"
          placeholder="Choose a password"
          onChange={(event) => handleChange(event)}
        />
        <input
          className="sign-up-input"
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm password"
          onChange={(event) => handleChange(event)}
        />
        <button className="sign-up-button" type="submit">
          Sign Up
        </button>
      </form>
    </section>
  );
}

export default SignUpForm;

SignUpForm.propTypes = {
  setUser: PropTypes.func.isRequired,
};