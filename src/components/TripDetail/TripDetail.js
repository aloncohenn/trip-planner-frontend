import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import EditTripPopup from '../EditTripPopup/EditTripPopup';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TripDetail.css';

const TripDetail = ({ title, destination, start_date, end_date, trip_id }) => {
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
    const start = moment(startDate[0]);
    const end = moment(endDate[0]);
    const duration = moment.duration(end.diff(start));
    const days = duration.asDays();
    return days;
  };

  // const setTripStatusButton = () => {
  //   console.log(status);
  //   if (status === 'Created') {
  //     return 'status-btn created';
  //   }
  //   if (status === 'InProgress') {
  //     return 'status-btn in-progress';
  //   }

  //   if (status === 'Ready') {
  //     return 'status-btn ready';
  //   }
  // };

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
        <p>
          <strong>Start: </strong>
          {startDate[0]}
        </p>
        <p>
          <strong>End: </strong>
          {endDate[0]}
        </p>
        <p>
          <strong>Duration: </strong> {getDuration(startDate, endDate)} days
        </p>
      </div>
      <div className="right-col">
        <p className="destination">
          <strong>{destination}</strong>
        </p>
      </div>
      <button
        className="edit-btn"
        onClick={togglePopup}
        style={{ background: 'none' }}
      >
        <FontAwesomeIcon icon="edit" color="#2376ae" size="3x" />
      </button>
      {showPopup && (
        <EditTripPopup
          closePopup={togglePopup}
          trip_id={trip_id}
          destination={destination}
        />
      )}
    </li>
  );
};

export default TripDetail;
