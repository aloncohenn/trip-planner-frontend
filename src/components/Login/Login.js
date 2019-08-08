import React, { useState, useContext } from 'react';
import AuthApiService from '../../services/AuthApiService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Emoji from '../Emoji/Emoji';
import { UserContext } from '../../contexts/UserContext';
import './Login.css';

const Login = props => {
  const { handleLogIn } = useContext(UserContext);
  const [error, setError] = useState(null);

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
        const jwt = res.data.authToken.split('bearer ')[1];
        handleLogIn(jwt, redirect);
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
        const jwt = res.data.authToken.split('bearer ')[1];
        handleLogIn(jwt, redirect);
      }
    });
  };

  return (
    <section className="login-form">
      <h1>Log In</h1>
      <form onSubmit={handleSubmitJwtAuth}>
        <div role="alert">
          {error && (
            <p className="error">
              {error} <Emoji symbol="😃" />
            </p>
          )}
        </div>{' '}
        <div>
          <label htmlFor="username">
            <FontAwesomeIcon icon="user" color="#2376ae" size="sm" /> Username{' '}
          </label>{' '}
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username..."
          />
        </div>
        <div>
          <label htmlFor="password">
            <FontAwesomeIcon icon="key" color="#2376ae" size="sm" /> Password{' '}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password..."
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
