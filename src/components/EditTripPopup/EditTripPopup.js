import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditTripForm from '../EditTripForm/EditTripForm';
import './EditTripPopup.css';

const EditTripPopup = props => {
  return (
    <div className="popup">
      <div className="popup_inner">
        <h1>{props.text}</h1>
        <button onClick={props.closePopup} className="close-popup">
          <FontAwesomeIcon icon="window-close" color="#2376ae" size="3x" />
        </button>
        <EditTripForm />
      </div>
    </div>
  );
};

export default EditTripPopup;
