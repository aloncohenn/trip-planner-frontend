import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { TripContext } from '../../contexts/TripContext';
import SearchBox from '../SearchBox/SearchBox';
import './Filter.css';

const Filter = () => {
  const { navFilter } = useContext(TripContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const [All] = useState('All');
  const [Active] = useState('Active');
  const [Paused] = useState('Paused');
  const [Completed] = useState('Completed');

  const handleClick = e => {
    const { value } = e.target;

    navFilter(value);
  };

  return (
    <nav
      style={{ background: theme.ui, color: theme.color }}
      className="filter-nav"
    >
      <button
        type="button"
        value={All}
        onClick={handleClick}
        className="filter-nav-btn"
      >
        All
      </button>
      <button
        type="button"
        value={Active}
        onClick={handleClick}
        className="filter-nav-btn"
      >
        Business
      </button>
      <button
        type="button"
        value={Paused}
        onClick={handleClick}
        className="filter-nav-btn"
      >
        Vacation
      </button>
      <button
        type="button"
        value={Completed}
        onClick={handleClick}
        className="filter-nav-btn"
      >
        Completed
      </button>
      <SearchBox />
    </nav>
  );
};

export default Filter;
