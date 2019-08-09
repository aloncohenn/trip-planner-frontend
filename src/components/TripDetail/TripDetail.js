import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import EditTripPopup from '../EditTripPopup/EditTripPopup';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TripDetail.css';

const TripDetail = ({ title, destination, start_date, end_date }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // trim the dates for presentation
  const startDate = start_date.split('T');
  const endDate = end_date.split('T');

  const getDuration = (startDate, endDate) => {
    const start = moment(startDate[0]); //todays date
    const end = moment(endDate[0]); // another date
    const duration = moment.duration(end.diff(start));
    const days = duration.asDays();
    return days;
  };

  return (
    <li
      style={{ backgroundColor: theme.cardbg }}
      className={!isLightTheme ? 'dark-mode-item item' : 'item'}
    >
      <div className="item-info">
        <h3 className="title">{title}</h3>
        <div className="bar" />
      </div>
      <div className="left-col">
        <p>Start: {startDate[0]}</p>
        <p>End: {endDate[0]}</p>
        <p>Duration: {getDuration(startDate, endDate)} days</p>
      </div>
      <div className="right-col">
        <p className="destination">{destination}</p>
      </div>
      <button className="edit-btn" onClick={togglePopup}>
        <FontAwesomeIcon icon="edit" color="#2376ae" size="2x" />
      </button>
      <button className="edit-btn" onClick={togglePopup}>
        <FontAwesomeIcon icon="trash-alt" color="#2376ae" size="2x" />
      </button>
      {showPopup && <EditTripPopup closePopup={togglePopup} />}
    </li>
  );
};

export default TripDetail;
