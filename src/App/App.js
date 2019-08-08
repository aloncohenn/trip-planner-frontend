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
      <UserContextProvider>
        <ThemeContextProvider>
          <TripContextProvider>
            <Navbar />
            <ThemeToggle />
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route path="/signup" component={SignUp} />
              <Route path="/" component={Login} />
            </Switch>
          </TripContextProvider>
        </ThemeContextProvider>
      </UserContextProvider>
    </div>
  );
};

export default App;
