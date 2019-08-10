import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AddTripPopup.css';
import TripForm from '../TripForm/TripForm';

const AddTripPopup = props => {
  return (
    <div className="popup">
      <div className="popup_inner">
        <h1>{props.text}</h1>
        <button onClick={props.closePopup} className="close-popup">
          <FontAwesomeIcon icon="window-close" color="#2376ae" size="3x" />
        </button>
        <TripForm />
      </div>
    </div>
  );
};

export default AddTripPopup;
