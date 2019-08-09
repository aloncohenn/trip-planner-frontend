import React, { useContext, useState, useEffect } from 'react';
import TodoApiService from '../../services/TodosApiService';
import { TripContext } from '../../contexts/TripContext';

const TodosList = ({ trip_id }) => {
  const { trips } = useContext(TripContext);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    TodoApiService.getTodos(trip_id).then(res => setTodos(res));
  }, []);

  return (
    <div className="dashboard">
      <ul className="trip-list">'test</ul>
    </div>
  );
};

export default TodosList;
