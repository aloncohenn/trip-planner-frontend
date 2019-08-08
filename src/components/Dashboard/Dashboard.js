import React, { useContext } from 'react';
import { TripContext } from '../../contexts/TripContext';
import TripDetail from '../TripDetail/TripDetail';
import Filter from '../Filter/Filter';
import TripList from '../TripList/TripList';
import './Dashboard.css';

const Dashboard = () => {
  const { trips } = useContext(TripContext);

  // const tripList = trips.map(trip => {
  //   return <TripDetail key={trip.id} />;
  // });

  let tripList = ['trip one', 'trip two'];

  return (
    <div className="dashboard">
      <ul className="trip-list">{tripList}</ul>
      <Filter />
      <TripList />
    </div>
  );
};

export default Dashboard;
