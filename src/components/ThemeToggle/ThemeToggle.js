import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);

  const setIcon = () => {
    if (isLightTheme) {
      return (
        <FontAwesomeIcon
          icon="moon"
          color="#333"
          size="3x"
          style={{ cursor: 'pointer' }}
        />
      );
    }
    return (
      <FontAwesomeIcon
        icon="sun"
        color="yellow"
        size="3x"
        style={{ cursor: 'pointer' }}
      />
    );
  };

  return (
    <div className="theme-toggle">
      <button
        onClick={toggleTheme}
        className={!isLightTheme ? 'theme-btn dark' : 'theme-btn'}
      >
        {setIcon()}
      </button>
    </div>
  );
};

export default ThemeToggle;
