import React, { useState, useContext } from 'react';
import AuthApiService from '../../services/AuthApiService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Emoji from '../Emoji/Emoji';
import { UserContext } from '../../contexts/UserContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Login.css';

const Login = props => {
  const { handleLogIn } = useContext(UserContext);
  const [error, setError] = useState(null);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const redirect = () => {
    props.history.replace('/dashboard');
  };

  const handleSubmitJwtAuth = e => {
    e.preventDefault();
    const { username, password } = e.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    }).then(res => {
      if (res.error) {
        setError(res.error);
      } else {
        username.value = '';
        password.value = '';
        handleLogIn(res.data.authToken, redirect);
      }
    });
  };

  const handleDemo = () => {
    AuthApiService.postLogin({
      username: 'demoUser',
      password: 'demoAccount@1'
    }).then(res => {
      if (res.error) {
        setError(res.error);
      } else {
        handleLogIn(res.data.authToken, redirect);
      }
    });
  };

  return (
    <section className="login-form">
      <h1 style={{ color: theme.color }}>Log In</h1>
      <form onSubmit={handleSubmitJwtAuth}>
        <div role="alert">
          {error && (
            <p className="error">
              {error} <Emoji symbol="😃" />
            </p>
          )}
        </div>{' '}
        <div>
          <label htmlFor="username" style={{ color: theme.color }}>
            <FontAwesomeIcon icon="user" color="#2376ae" size="sm" /> Username{' '}
          </label>{' '}
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username..."
            required
          />
        </div>
        <div>
          <label htmlFor="password" style={{ color: theme.color }}>
            <FontAwesomeIcon icon="key" color="#2376ae" size="sm" /> Password{' '}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password..."
            required
          />
        </div>
        <button type="submit">Log In</button>
        <input
          type="button"
          className="button"
          onClick={handleDemo}
          value="Demo"
        />
      </form>
    </section>
  );
};

export default Login;
