import React, { useContext, useState } from 'react';
import { TripContext } from '../../contexts/TripContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import EditTripForm from '../EditTripForm/EditTripForm';
import Filter from '../Filter/Filter';
import moment from 'moment';
import './Dashboard.css';

const Dashboard = () => {
  const { filteredTrips } = useContext(TripContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const [tripID, setTripID] = useState(null);

  const tripData = filteredTrips.find(trip => trip.id === tripID);

  const getTripForm = id => {
    setTripID(id);
  };
  const getDuration = (startDate, endDate) => {
    // split the date to get format YYYY-MM-DD
    startDate = startDate.split('T');
    endDate = endDate.split('T');
    const start = moment(startDate[0]);
    const end = moment(endDate[0]);
    const duration = moment.duration(end.diff(start));
    const days = duration.asDays();
    return days;
  };

  const rows = filteredTrips.map((trip, idx) => {
    return (
      <tr
        key={idx}
        onClick={() => getTripForm(trip.id)}
        className={!isLightTheme ? 'dark-mode-row' : null}
      >
        <td>{trip.title}</td>
        <td>{trip.destination}</td>
        <td>{getDuration(trip.start_date, trip.end_date)} days</td>
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
              <th>Duration</th>
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
