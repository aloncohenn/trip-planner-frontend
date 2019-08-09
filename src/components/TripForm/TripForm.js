import React, { useState, useContext } from 'react';
import { TripContext } from '../../contexts/TripContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Emoji from '../Emoji/Emoji';

import './TripForm.css';

const TripForm = props => {
  const [error, setError] = useState(null);
  const [tripAdded, setTripAdded] = useState(false);
  const { addTrip } = useContext(TripContext);

  const handleSubmitTrip = e => {
    e.preventDefault();
    const {
      title,
      destination,
      start_date,
      end_date,
      todos,
      category
    } = e.target;

    console.log(category);
    setError(
      addTrip({
        title: title.value,
        destination: destination.value,
        category: category.value,
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
      <form className="trip-form" onSubmit={handleSubmitTrip}>
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
            placeholder="First family vacation"
          />
        </div>
        <div>
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            name="destination"
            id="destination"
            placeholder="Hawaii..."
          />
        </div>
        <div>
          <label htmlFor="start_date">Start Date</label>
          <input
            type="text"
            name="start_date"
            id="start_date"
            placeholder="yyyy-mm-dd"
          />
        </div>
        <div>
          <label htmlFor="end_date">End Date</label>
          <input
            type="text"
            name="end_date"
            id="end_date"
            placeholder="yyyy-mm-dd"
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select name="category">
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
        <div>
          <label htmlFor="todos">Todos</label>
          <input
            type="textarea"
            name="todos"
            id="todos"
            placeholder="todos"
            size="40"
          />
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

export default TripForm;
