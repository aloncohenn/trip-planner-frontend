import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ addTodo, trip_id }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value, trip_id);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <label htmlFor="addTodo" />
      <input
        type="text"
        className="input"
        value={value}
        placeholder="add a todo..."
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
