import { Link } from 'react-router-dom';
import { useState } from 'react';
import './LoginForm.css';

// TESTING PURPOSES
import userData from '../../testData/userData';

function LoginForm({ handleLogin }) {
  const [formChoice, setFormChoice] = useState('');
  const [loginValues, setLoginValues] = useState({
    name: '',
    email: ''
  });

  const handleChange = (event) => {
    const fieldInput = event.target;
    setLoginValues({ ...loginValues, [fieldInput.name]: fieldInput.value });
  }

  return (
    <section className="page--container column">
      <h2>Welcome to FieldTrippers!</h2>
      { formChoice === ''
          ? <form>
              <Link to='/search'>
                <button 
                  className="primary--button login--button" 
                  onClick={() => handleLogin(userData)}
                >
                  See App
                </button>
              </Link>
              <button 
                className="primary--button login--button" 
                onClick={() => setFormChoice('Login')}
              >
                Login
              </button>
              <button 
                className="primary--button login--button" 
                onClick={() => setFormChoice('Sign Up')}
              >
                Sign Up
              </button>
            </form>
          : <form>
              <input
                  type='text'
                  name='name'
                  placeholder="Enter your first name"
                  onChange={(event) => handleChange(event)}
                  value={loginValues.city}
                />
              <input
                type='email'
                name='email'
                placeholder="Enter your email"
                onChange={(event) => handleChange(event)}
                value={loginValues.state}
              />
              <Link to='/search'>
                <button 
                  className="primary--button login--button" 
                  onClick={() => handleLogin(loginValues, formChoice)}
                >
                  {formChoice}
                </button>
              </Link>
            </form>
      }
    </section>
  )
}

export default LoginForm;