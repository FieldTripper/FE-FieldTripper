import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { CREATE_SESSION_QUERY } from '../../queries/queries';
import { manageLocalData } from "../../utilities/utilities";
import './LoginForm.css';

function LoginForm({ setUser }) {
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: ''
  });
  const [loginUser, { loading, error, data }] = useLazyQuery(CREATE_SESSION_QUERY);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      manageLocalData('userData', setUser, data.createSession.user);
      navigate("/trip-type");
    } 
  }, [data]);

  const handleChange = (event) => {
    const fieldInput = event.target
    setLoginValues({ ...loginValues, [fieldInput.name]: fieldInput.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser({ variables: loginValues });
  }

  return (
    <section className="page--container column">
      <h2>Login Form</h2>
      <form onSubmit={(event) => handleSubmit(event)} >
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(event) => handleChange(event)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(event) => handleChange(event)}
        />
        <button 
          className="primary--button"
          type="submit"
        >
          Login
        </button>
      </form>
    </section>
  )
}

export default LoginForm;