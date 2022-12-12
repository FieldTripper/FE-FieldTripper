import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER_MUTATION } from '../../queries/queries';
import './SignUpForm.css';

function SignUpForm({ setUser }) {
  const [signUpValues, setSignUpValues] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });
  const [createUser, { loading, error, data }] = useMutation(CREATE_USER_MUTATION);

  const handleChange = (event) => {
    const fieldInput = event.target
    setSignUpValues({ ...signUpValues, [fieldInput.name]: fieldInput.value })
  }

  const handleSubmit = () => {
    createUser({ variables: { name: signUpValues.name, email: signUpValues.email, password: signUpValues.password, passwordConfirmation: signUpValues.passwordConfirmation } });
    console.log({loading});
    console.log({error});
    console.log({data});

    // setUser(data);
  }

  return (
    <section className="page--container column">
      <h2>Sign Up Form</h2>
      <form>
        <input 
         type="text" 
         name="name"
         placeholder="Enter your name"
         onChange={(event) => handleChange(event)}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={(event) => handleChange(event)}
        />
        <input
          type="password"
          name="password"
          placeholder="Choose a password"
          onChange={(event) => handleChange(event)}
        />
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm password"
          onChange={(event) => handleChange(event)}
        />
        <Link to="/trip-type">
          <button 
            className="primary--button"
            onClick={() => handleSubmit()}
          >
            Sign Up
          </button>
        </Link>
      </form>
    </section>
  )
}

export default SignUpForm;