import React, { useContext, useState, useEffect } from 'react';
import { TripContext } from '../../contexts/TripContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import Filter from '../Filter/Filter';
import './Dashboard.css';
import EditTripForm from '../EditTripForm/EditTripForm';

const Dashboard = () => {
  const { filteredTrips } = useContext(TripContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const [tripID, setTripID] = useState(null);

  useEffect(() => {
    setTripID(tripID);
  }, [tripID]);

  const getTripForm = id => {
    setTripID(id);
  };

  const rows = filteredTrips.map((trip, idx) => {
    return (
      <tr key={idx}>
        <td>
          <button onClick={() => getTripForm(trip.id)}>{trip.title} </button>
        </td>
        <td>
          <button onClick={() => getTripForm(trip.id)}>
            {trip.destination}{' '}
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="row" style={{ background: theme.ui }}>
      <div className="column">
        <Filter />
      </div>
      <div className="column">
        <table style={{ color: theme.color }}>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Destination</th>
            </tr>
            {rows}
          </tbody>
        </table>
      </div>
      <div className="column">{tripID && <EditTripForm tripID={tripID} />}</div>
    </div>
  );
};

export default Dashboard;
