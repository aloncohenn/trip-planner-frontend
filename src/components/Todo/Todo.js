import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Todo.css';

const Todo = ({ todo, updateTodo, deleteTodo }) => {
  return (
    <div
      className="todo"
      style={{
        textDecoration: todo.done_status ? 'line-through' : '',
        fontSize: '14px'
      }}
    >
      {todo.title}

      <div>
        <button
          onClick={() => updateTodo(todo.id, todo.title, !todo.done_status)}
          className="todo-btn"
        >
          {todo.done_status ? (
            <FontAwesomeIcon icon="check-square" color="#ffffff" size="1x" />
          ) : (
            <FontAwesomeIcon icon="square" color="#ffffff" size="1x" />
          )}
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="todo-btn">
          <FontAwesomeIcon icon="trash-alt" color="#ffffff" size="1x" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
