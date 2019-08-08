import React from 'react';
import ThemeContextProvider from './contexts/ThemeContext';
import TripContextProvider from './contexts/TripContext';
import Navbar from './components/Navbar/Navbar';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <TripContextProvider>
          <Navbar />
          <ThemeToggle />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </TripContextProvider>
      </ThemeContextProvider>
    </div>
  );
};

export default App;
