import React, { useState, useContext } from 'react';
import AuthApiService from '../../services/AuthApiService';
import { ThemeContext } from '../../contexts/ThemeContext';
import useSignUpForm from './useSignUpForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Emoji from '../Emoji/Emoji';
import './SignUp.css';

const SignUp = () => {
  const [error, setError] = useState('');
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { values, handleChange, handleSubmit } = useSignUpForm(
    { username: '', password: '' },
    signupUser
  );

  function signupUser() {
    console.log(values);
    AuthApiService.postUser({ ...values }).then(res => {
      if (res.error) {
        setError(res.error);
        return;
      }
      console.log(res);
    });
  }

  return (
    <section className="signup-form">
      <h1 style={{ color: theme.color }}>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div role="alert">
          {error && (
            <p className="error">
              {error} <Emoji symbol="😃" />
            </p>
          )}
        </div>{' '}
        <div>
          <label style={{ color: theme.color }}>
            <FontAwesomeIcon icon="user" color="#2376ae" size="sm" /> Username{' '}
          </label>{' '}
          <input
            className="input"
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username}
            placeholder="username..."
            required
          />
        </div>
        <div>
          <label style={{ color: theme.color }}>
            <FontAwesomeIcon icon="key" color="#2376ae" size="sm" /> Password{' '}
          </label>{' '}
          <input
            className="input"
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            placeholder="password..."
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </section>
  );
};

export default SignUp;
