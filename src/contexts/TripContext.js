import React, { createContext, useState, useEffect } from 'react';
import TripApiService from '../services/TripApiService';
import TokenService from '../services/TokenService';
import moment from 'moment';

export const TripContext = createContext();

const TripContextProvider = props => {
  const [trips, setTrips] = useState([]);
  // const [filteredTrips, setFilteredTrips] = useState(trips);

  useEffect(() => {
    if (TokenService.hasAuthToken()) {
      TripApiService.getTrips().then(trips => setTrips(trips));
    }
  }, []);

  const getNow = () => {
    return moment().format('YYYY-MM-DD');
  };

  // const filterTrips = value => {
  //   let filteredTrips = trips.filter(trip => {
  //     return trip.title.toLowerCase().startsWith(value.toLowerCase());
  //   });
  //   setFilteredTrips(filteredTrips);
  // };

  // const navFilter = value => {
  //   if (value === 'None') {
  //     return setFilteredTrips(trips);
  //   }
  //   let filteredTrips = trips.filter(trip => {
  //     return trip.category.startsWith(value);
  //   });
  //   setFilteredTrips(filteredTrips);
  // };

  const addTrip = tripData => {
    TripApiService.postTrip(tripData).then(res => {
      if (res.error) {
        return res.error;
      } else {
        TripApiService.getTrips().then(trips => setTrips(trips));
      }
    });
  };

  const deleteTrip = id => {
    TripApiService.deleteTrip(id);
    TripApiService.getTrips().then(trips => setTrips(trips));
  };

  return (
    <TripContext.Provider value={{ trips, addTrip, deleteTrip, getNow }}>
      {props.children}
    </TripContext.Provider>
  );
};

export default TripContextProvider;
