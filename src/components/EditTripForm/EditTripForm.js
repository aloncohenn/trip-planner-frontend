import React, { useState, useContext } from 'react';
import { TripContext } from '../../contexts/TripContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import TodoList from '../TodoList/TodoList';
import moment from 'moment';
import Emoji from '../Emoji/Emoji';
import './EditTripForm.css';

const EditTripForm = ({ tripData }) => {
  const [error, setError] = useState(null);
  const { updateTrip, deleteTrip } = useContext(TripContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

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
      <form className="trip-form" onSubmit={handleSubmitTrip}>
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
            className="input-val"
            key={`title:${tripData.title || tripData.title}`}
            defaultValue={tripData.title || tripData.title}
          />
        </div>
        <div>
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            name="destination"
            className="input-val"
            key={`destination:${tripData.destination || tripData.destination}`}
            defaultValue={tripData.destination}
          />
        </div>
        <div>
          <label htmlFor="start_date">Start Date</label>
          <input
            type="date"
            name="start_date"
            className="input-val"
            key={`start_date:${tripData.start_date || tripData.start_date}`}
            defaultValue={moment(tripData.start_date).format('YYYY-MM-DD')}
          />
        </div>
        <div>
          <label htmlFor="end_date">End Date</label>
          <input
            type="date"
            name="end_date"
            className="input-val"
            key={`end_date:${tripData.end_date || tripData.end_date}`}
            defaultValue={moment(tripData.end_date).format('YYYY-MM-DD')}
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            className="select-css"
            key={`category:${tripData.category || tripData.category}`}
            defaultValue={tripData.category}
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
          onClick={() => deleteTrip(tripData.id)}
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
