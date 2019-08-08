export const TripReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_STATUS':
      return state.map(item => {
        // map over items in STORE and set to the opposite of previous value (active || paused)
        if (item.name === action.name) {
          item.status === 'Active'
            ? (item.status = 'Paused')
            : (item.status = 'Active');
        }
        return item;
      });
    case 'REMOVE_ITEM':
      return state.filter(item => item.name === action.name);
    default:
      return state;
  }
};
