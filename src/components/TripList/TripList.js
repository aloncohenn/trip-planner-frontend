import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { TripContext } from '../../contexts/TripContext';
import TripDetail from '../TripDetail/TripDetail';
import Emoji from '../Emoji/Emoji';
import './TripList.css';

const TripList = () => {
  const { filteredTrips } = useContext(TripContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  // const tripList = filteredTrips.map(trip => {
  //   return <TripDetail item={trip} key={trip.name} />;
  // });

  return (
    <>
      <div
        style={{ color: theme.color, background: theme.ui }}
        className="list-container"
      >
        {/* <ul className="trip-list">{tripList}</ul> */}
      </div>
      <div className={!isLightTheme ? 'empty empty-dark' : 'empty'}>
        You have no trips here <Emoji symbol="😃" />
      </div>
    </>
  );
};
export default TripList;
