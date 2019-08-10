import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { TripContext } from '../../contexts/TripContext';
import SearchBox from '../SearchBox/SearchBox';
import AddTripPopup from '../AddTripPopup/AddTripPopup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Filter.css';

const Filter = props => {
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
      <button
        type="button"
        value={None}
        onClick={handleClick}
        className="filter-nav-btn"
      >
        None
      </button>
      <button
        type="button"
        value={Business}
        onClick={handleClick}
        className="filter-nav-btn"
      >
        Business
      </button>
      <button
        type="button"
        value={Vacation}
        onClick={handleClick}
        className="filter-nav-btn"
      >
        Vacation
      </button>
      <button
        className="add-btn"
        onClick={togglePopup}
        style={{ background: 'none' }}
      >
        <FontAwesomeIcon icon="plus" color="#2376ae" size="3x" />
      </button>
      {showPopup && <AddTripPopup closePopup={togglePopup} />}
      <SearchBox />
    </nav>
  );
};

export default Filter;
