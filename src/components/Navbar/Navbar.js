import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import TokenService from '../../services/TokenService';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { status, handleLogOut } = useContext(UserContext);

  const getUserName = () => {
    const authToken = TokenService.getAuthToken();
    const decoded = jwtDecode(authToken);
    return decoded.sub;
  };

  const renderLoggedOutView = () => {
    return (
      <>
        <span
          className="navbar-toggle"
          id="js-navbar-toggle"
          onClick={() => setActive(!active)}
        >
          <FontAwesomeIcon icon="bars" color="white" size="lg" />
        </span>
        <Link to="/" className="logo">
          TripPlanner
        </Link>
        <ul className="main-nav" id={active ? 'active' : null}>
          <li>
            <Link to="/signup" className="nav-links">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-links">
              Log In
            </Link>
          </li>
        </ul>
      </>
    );
  };

  const renderLoggedInView = () => {
    return (
      <>
        <span
          className="navbar-toggle"
          id="js-navbar-toggle"
          onClick={() => setActive(!active)}
        >
          <FontAwesomeIcon icon="bars" color="white" size="lg" />
        </span>
        <Link to="/" className="logo">
          TripPlanner
        </Link>
        <ul className="main-nav" id={active ? 'active' : null}>
          <li>
            <Link to="/dashboard" className="nav-links">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-links" onClick={() => handleLogOut()}>
              Logout
            </Link>
          </li>
          <li>
            <p className="welcome-message">Welcome, {getUserName()}!</p>
          </li>
        </ul>
      </>
    );
  };

  return (
    <nav className="navbar">
      {status ? renderLoggedInView() : renderLoggedOutView()}
    </nav>
  );
};

export default Navbar;
