import React, { useContext } from 'react';
import { TripContext } from '../../contexts/TripContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import TripDetail from '../TripDetail/TripDetail';
import Filter from '../Filter/Filter';
import './Dashboard.css';

const Dashboard = () => {
  const { trips } = useContext(TripContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const tripList = trips.map(trip => {
    return (
      <TripDetail
        item={trip}
        key={trip.id}
        trip_id={trip.id}
        title={trip.title}
        destination={trip.destination}
        category={trip.category}
        start_date={trip.start_date}
        end_date={trip.end_date}
      />
    );
  });

  return (
    <div
      className="dashboard"
      style={{ color: theme.color, background: theme.ui }}
    >
      <Filter />
      <ul className="trip-list">{tripList}</ul>
    </div>
  );
};

export default Dashboard;
