import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { TripContext } from '../../contexts/TripContext';
import SearchBox from '../SearchBox/SearchBox';
import AddTripPopup from '../AddTripPopup/AddTripPopup';
import './Filter.css';

const Filter = () => {
  const { navFilter } = useContext(TripContext);
  const [showPopup, setShowPopup] = useState(false);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const [None] = useState('None');
  const [Business] = useState('Business');
  const [Vacation] = useState('Vacation');

  const handleClick = e => {
    const { value } = e.target;

    navFilter(value);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <nav
      style={{ background: theme.ui, color: theme.color }}
      className="filter-nav"
    >
      <div className="filter-buttons">
        <button
          type="button"
          value={None}
          onClick={handleClick}
          className="filter-btn"
        >
          None
        </button>
        <button
          type="button"
          value={Business}
          onClick={handleClick}
          className="filter-btn"
        >
          Business
        </button>
        <button
          type="button"
          value={Vacation}
          onClick={handleClick}
          className="filter-btn"
        >
          Vacation
        </button>
        <button onClick={togglePopup} className="filter-btn">
          New Trip
        </button>
        {showPopup && <AddTripPopup closePopup={togglePopup} />}
      </div>
      <SearchBox />
    </nav>
  );
};

export default Filter;
