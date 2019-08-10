import React, { createContext, useState, useEffect } from 'react';
import TripApiService from '../services/TripApiService';
import TokenService from '../services/TokenService';
import moment from 'moment';

export const TripContext = createContext();

const TripContextProvider = props => {
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);

  useEffect(() => {
    if (TokenService.hasAuthToken()) {
      TripApiService.getTrips().then(trips => {
        setTrips(trips);
        setFilteredTrips(trips);
      });
    }
  }, []);

  const getDate = () => {
    return moment().format('YYYY-MM-DD');
  };

  const addTrip = tripData => {
    TripApiService.postTrip(tripData).then(res => {
      if (res.error) {
        return res.error;
      } else {
        TripApiService.getTrips().then(trips => setTrips(trips));
      }
    });
  };

  const updateTrip = tripData => {
    TripApiService.updateTrip(tripData).then(res => {
      if (res.error) {
        return res.error;
      } else {
        TripApiService.getTrips().then(trips => setTrips(trips));
      }
    });
  };

  const deleteTrip = id => {
    TripApiService.deleteTrip(id).then(() => {
      TripApiService.getTrips().then(trips => setTrips(trips));
    });
  };

  const filterTrips = value => {
    let filteredTrips = trips.filter(trip => {
      return trip.title.toLowerCase().startsWith(value.toLowerCase());
    });
    setFilteredTrips(filteredTrips);
  };

  const navFilter = value => {
    if (value === 'None') {
      return setFilteredTrips(trips);
    }
    let filteredTrips = trips.filter(trip => {
      return trip.category.toLowerCase().startsWith(value.toLowerCase());
    });
    setFilteredTrips(filteredTrips);
  };

  const loadTripsForUser = () => {
    TripApiService.getTrips().then(trips => {
      setTrips(trips);
      setFilteredTrips(trips);
    });
  };

  return (
    <TripContext.Provider
      value={{
        addTrip,
        updateTrip,
        deleteTrip,
        filteredTrips,
        filterTrips,
        navFilter,
        getDate,
        loadTripsForUser
      }}
    >
      {props.children}
    </TripContext.Provider>
  );
};

export default TripContextProvider;
