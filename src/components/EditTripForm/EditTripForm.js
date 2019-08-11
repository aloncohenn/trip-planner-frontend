import React, { useState, useContext, useEffect } from 'react';
import { TripContext } from '../../contexts/TripContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import TodoList from '../TodoList/TodoList';
import moment from 'moment';
import Emoji from '../Emoji/Emoji';
import './EditTripForm.css';

const EditTripForm = ({ tripID }) => {
  const [error, setError] = useState(null);
  const { filteredTrips, updateTrip, deleteTrip } = useContext(TripContext);
  const [data, setData] = useState({});
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const tripData = filteredTrips.find(trip => trip.id === tripID);

  useEffect(() => {
    setData(tripData);
  }, [tripData]);

  console.log(data);

  const handleSubmitTrip = e => {
    e.preventDefault();
    const { title, destination, start_date, end_date, category } = e.target;
    setError(
      updateTrip({
        title: title.value,
        destination: destination.value,
        category: category.value,
        start_date: start_date.value,
        end_date: end_date.value,
        status: tripData.status,
        id: tripData.id
      })
    );
  };

  return (
    <section style={{ background: theme.ui, color: theme.color }}>
      <form className="edit-trip trip-form" onSubmit={handleSubmitTrip}>
        <div role="alert">
          {error && (
            <p className="error">
              {error} <Emoji symbol="😃" />
            </p>
          )}
        </div>
        <div>
          <label htmlFor="title">Trip Title</label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={data.title}
            className="input-val"
          />
        </div>
        <div>
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            name="destination"
            id="destination"
            defaultValue={data.destination}
            className="input-val"
          />
        </div>
        <div>
          <label htmlFor="start_date">Start Date</label>
          <input
            type="date"
            name="start_date"
            id="start_date"
            defaultValue={moment(data.start_date).format('YYYY-MM-DD')}
            className="input-val"
          />
        </div>
        <div>
          <label htmlFor="end_date">End Date</label>
          <input
            type="date"
            name="end_date"
            id="end_date"
            defaultValue={moment(data.end_date).format('YYYY-MM-DD')}
            className="input-val"
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            className="select-css"
            defaultValue={data.category}
          >
            <option value="none" name="category">
              None
            </option>
            <option value="business" name="category">
              Business
            </option>
            <option value="vacation" name="category">
              Vacation
            </option>
          </select>
        </div>
        <button
          type="submit"
          style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '8px' }}
        >
          Save
        </button>
        <input
          className="delete-btn"
          type="button"
          value="Delete"
          onClick={() => deleteTrip(data.id)}
          style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '8px' }}
        />
      </form>
      <div>
        <TodoList trip_id={tripData.id} />
      </div>
    </section>
  );
};

export default EditTripForm;
