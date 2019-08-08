import React, { useContext, useState } from 'react';
import { TripContext } from '../../contexts/TripContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import './SearchBox.css';

const SearchBox = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { filterItems } = useContext(TripContext);
  const [val, setVal] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setVal(value);
    filterItems(value);
  };

  return (
    <input
      type="text"
      value={val}
      placeholder="Search items..."
      onChange={handleChange}
      className="search-input"
      autoCapitalize="off"
      autoCorrect="off"
      style={{ background: theme.ui, color: theme.color }}
    />
  );
};

export default SearchBox;
