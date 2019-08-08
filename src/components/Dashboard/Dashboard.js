import React, { useContext } from 'react';
import { TripContext } from '../../contexts/TripContext';
import './Dashboard.css';
import TripDetail from '../TripDetail/TripDetail';
import Filter from '../Filter/Filter';
import TripList from '../TripList/TripList';

const Dashboard = () => {
  const { trips } = useContext(TripContext);

  // const tripList = trips.map(trip => {
  //   return <TripDetail key={trip.id} />;
  // });

  return (
    <div className="dashboard">
      <ul className="job-list">{tripList}</ul>
      <Filter />
      <TripList />
    </div>
  );
};

export default Dashboard;
