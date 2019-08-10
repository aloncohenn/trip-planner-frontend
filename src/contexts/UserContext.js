import React, { createContext, useState, useContext } from 'react';
import TokenService from '../services/TokenService';
import { TripContext } from './TripContext';

export const UserContext = createContext();

const UserContextProvider = props => {
  const [status, setStatus] = useState(TokenService.hasAuthToken());
  const { loadTripsForUser } = useContext(TripContext);

  const handleLogOut = () => {
    TokenService.clearAuthToken();
    setStatus(false);
  };

  const handleLogIn = (jwt, redirect) => {
    TokenService.saveAuthToken(jwt);
    setStatus(true);
    loadTripsForUser();
    redirect();
  };

  return (
    <UserContext.Provider
      value={{ handleLogOut, handleLogIn, status, setStatus }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
