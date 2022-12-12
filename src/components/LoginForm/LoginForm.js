import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { CREATE_SESSION_QUERY } from '../../queries/queries';
import ConditionalLink from '../ConditionalLink/ConditionalLink';
import './LoginForm.css';

function LoginForm({ setUser }) {
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: ''
  });
  const [loginUser, { loading, error, data }] = useLazyQuery(CREATE_SESSION_QUERY);

  const handleChange = (event) => {
    const fieldInput = event.target
    setLoginValues({ ...loginValues, [fieldInput.name]: fieldInput.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser({ variables: { email: loginValues.email, password: loginValues.password } });
    console.log({data})
    if (data) setUser(data.createSession.user);
  }

  return (
    <section className="page--container column">
      <h2>Login Form</h2>
      <form>
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
          onClick={(event) => handleSubmit(event)}
        >
          Login
        </button>
      </form>
    </section>
  )
}

export default LoginForm;