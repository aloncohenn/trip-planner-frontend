import React from 'react';
import ThemeContextProvider from '../contexts/ThemeContext';
import TripContextProvider from '../contexts/TripContext';
import UserContextProvider from '../contexts/UserContext';
import Navbar from '../components/Navbar/Navbar';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';
import Dashboard from '../components/Dashboard/Dashboard';
import { Switch, Route } from 'react-router-dom';
import SignUp from '../components/SignUp/SignUp';
import Login from '../components/Login/Login';

const App = () => {
  return (
    <div className="App">
      <TripContextProvider>
        <UserContextProvider>
          <ThemeContextProvider>
            <Navbar />
            <ThemeToggle />
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </ThemeContextProvider>
        </UserContextProvider>
      </TripContextProvider>
    </div>
  );
};

export default App;
