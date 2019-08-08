import React, { createContext, useReducer, useState } from 'react';
import { TripReducer } from '../reducers/TripReducer';

export const TripContext = createContext();

const initialData = ['trip one', 'trip two', 'trip three'];

const TripContextProvider = props => {
  const [items, dispatch] = useReducer(TripReducer, initialData);
  const [filteredItems, setFilteredItems] = useState(items);

  const filterItems = value => {
    let filteredItems = items.filter(item => {
      return item.name.toLowerCase().startsWith(value.toLowerCase());
    });
    setFilteredItems(filteredItems);
  };

  const navFilter = value => {
    if (value === 'All') {
      return setFilteredItems(items);
    }
    let filteredItems = items.filter(item => {
      return item.status.startsWith(value);
    });
    setFilteredItems(filteredItems);
  };

  return (
    <TripContext.Provider
      value={{ filteredItems, dispatch, filterItems, navFilter }}
    >
      {props.children}
    </TripContext.Provider>
  );
};

export default TripContextProvider;
