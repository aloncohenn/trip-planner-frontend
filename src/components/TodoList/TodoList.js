import React, { useContext, useState, useLayoutEffect } from 'react';
import TodoApiService from '../../services/TodoApiService';
import { ThemeContext } from '../../contexts/ThemeContext';
import TodoForm from '../TodoForm/TodoForm';
import Todo from '../Todo/Todo';
import './TodoList.css';

const TodoList = ({ trip_id }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const [todos, setTodos] = useState([]);

  useLayoutEffect(() => {
    TodoApiService.getTodos(trip_id).then(todos => setTodos(todos));
  });

  const addTodo = (title, trip_id, done_status = false) => {
    const data = {
      title,
      trip_id,
      done_status
    };
    TodoApiService.postTodo(data).then(() => {
      TodoApiService.getTodos(trip_id).then(todos => setTodos(todos));
    });
  };

  const updateTodo = (id, title, done_status) => {
    const data = {
      id,
      title,
      done_status
    };
    TodoApiService.updateTodo(data).then(() => {
      TodoApiService.getTodos(trip_id).then(todos => setTodos(todos));
    });
  };

  return (
    <div
      className="todo-list"
      style={{ background: theme.ui, color: theme.color }}
    >
      <h4>Todo List</h4>
      <div
        className="todos-container"
        style={{ background: theme.ui, color: theme.black }}
      >
        {todos.map((todo, idx) => (
          <Todo key={idx} idx={idx} todo={todo} updateTodo={updateTodo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} trip_id={trip_id} />
    </div>
  );
};

export default TodoList;
