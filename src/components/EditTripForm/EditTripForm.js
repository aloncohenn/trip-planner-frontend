import React, { useState, useContext } from 'react';
import { TripContext } from '../../contexts/TripContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TodosList from '../TodosList/TodosList';
import moment from 'moment';
import Emoji from '../Emoji/Emoji';
import './EditTripForm.css';

const EditTripForm = props => {
  const [error, setError] = useState(null);
  const [tripAdded, setTripAdded] = useState(false);
  const { trips, addTrip } = useContext(TripContext);

  const tripData = trips.find(trip => trip.id === props.trip_id);

  const handleSubmitTrip = e => {
    e.preventDefault();
    const { title, destination, start_date, end_date, todos } = e.target;
    setError(
      addTrip({
        title: title.value,
        destination: destination.value,
        start_date: start_date.value,
        end_date: end_date.value,
        todos: todos.value
      })
    );
    title.value = '';
    destination.value = '';
    start_date.value = '';
    end_date.value = '';
    todos.value = '';
    setTripAdded(!tripAdded);
  };

  return (
    <section>
      <form className="edit-trip trip-form" onSubmit={handleSubmitTrip}>
        <div role="alert">
          {error && (
            <p className="error">
              {error} <Emoji symbol="😃" />
            </p>
          )}
        </div>
        <div>
          <label htmlFor="title">Vacation Title</label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={tripData.title}
          />
        </div>
        <div>
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            name="destination"
            id="destination"
            defaultValue={tripData.destination}
          />
        </div>
        <div>
          <label htmlFor="start_date">Start Date</label>
          <input
            type="date"
            name="start_date"
            id="start_date"
            defaultValue={moment(tripData.start_date).format('YYYY-MM-DD')}
          />
        </div>
        <div>
          <label htmlFor="end_date">End Date</label>
          <input
            type="date"
            name="end_date"
            id="end_date"
            defaultValue={moment(tripData.end_date).format('YYYY-MM-DD')}
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select>
            <option value="none">None</option>
            <option value="business">Business</option>
            <option value="vacation">Vacation</option>
          </select>
        </div>
        <div>
          <TodosList trip_id={tripData.id} />
        </div>
        <button type="submit">Submit</button>
        <p className="checkmark">
          {tripAdded && (
            <FontAwesomeIcon icon="check-circle" color="#2376ae" size="3x" />
          )}
        </p>
      </form>
    </section>
  );
};

export default EditTripForm;
