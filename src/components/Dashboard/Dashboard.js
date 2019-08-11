import React, { useContext, useState } from 'react';
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

  const tripData = filteredTrips.find(trip => trip.id === tripID);

  const getTripForm = id => {
    setTripID(id);
  };

  const rows = filteredTrips.map((trip, idx) => {
    return (
      <tr key={idx} onClick={() => getTripForm(trip.id)}>
        <td>{trip.title}</td>
        <td>{trip.destination}</td>
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
      <div className="column">
        {tripData && <EditTripForm tripData={tripData} />}
      </div>
    </div>
  );
};

export default Dashboard;
