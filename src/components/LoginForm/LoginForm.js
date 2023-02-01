import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { CREATE_SESSION_QUERY } from "../../queries/queries";
import { manageLocalData } from "../../utilities/utilities";
import "./LoginForm.css";
import PropTypes from "prop-types";

function LoginForm({ setUser }) {
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });
  const [loginUser, { loading, error, data }] =
    useLazyQuery(CREATE_SESSION_QUERY);
  const [warning, setWarning] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (data && data.createSession.user) {
      manageLocalData("userData", setUser, data.createSession.user);
      navigate("/trip-type");
    } else if (data) {
      setWarning(
        "Sorry, the information you provided does not seem to match any user in our system."
      );
    }
  }, [data]);

  const handleChange = (event) => {
    const fieldInput = event.target;
    setLoginValues({ ...loginValues, [fieldInput.name]: fieldInput.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isLoginValid = Object.keys(loginValues).every(
      (property) => loginValues[property] !== ""
    );

    if (!isLoginValid) {
      setWarning("Please fill in all fields");
    } else {
      loginUser({ variables: loginValues });
      setWarning("");
    }
  };

  return (
    <section className="page--container column">
      <h2 className="login-form">Login Form</h2>
      <p className="warning-message">{warning}</p>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          className="login-form-input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(event) => handleChange(event)}
        />
        <input
          className="login-form-input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(event) => handleChange(event)}
        />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
LoginForm.propTypes = {
  setUser: PropTypes.func.isRequired,
};
