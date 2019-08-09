import React, { useContext } from 'react';
import { TripContext } from '../../contexts/TripContext';
import TripDetail from '../TripDetail/TripDetail';
import Filter from '../Filter/Filter';
import './Dashboard.css';

const Dashboard = () => {
  const { trips } = useContext(TripContext);

  const tripList = trips.map(trip => {
    return (
      <TripDetail
        item={trip}
        key={trip.id}
        title={trip.title}
        destination={trip.destination}
        category={trip.category}
        start_date={trip.start_date}
        end_date={trip.end_date}
      />
    );
  });

  return (
    <div className="dashboard">
      <Filter />
      <ul className="trip-list">{tripList}</ul>
    </div>
  );
};

export default Dashboard;
