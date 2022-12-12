import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { CREATE_SESSION_QUERY } from '../../queries/queries';
import './LoginForm.css';

function LoginForm({ setUser }) {
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: ''
  });
  const [loginUser, { loading, error, data }] = useLazyQuery(CREATE_SESSION_QUERY);

  const handleChange = (event) => {
    const fieldInput = event.target
    setLoginValues({ ...loginValues, [fieldInput.name]: fieldInput.value })
  }

  const handleSubmit = () => {
    loginUser({ variables: { email: loginValues.email, password: loginValues.password } });
    console.log({loading});
    console.log({error});
    console.log({data});

    // setUser(data);
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
        <Link to="/trip-type">
          <button 
            className="primary--button"
            onClick={() => handleSubmit()}
          >
            Login
          </button>
        </Link>
      </form>
    </section>
  )
}

export default LoginForm;