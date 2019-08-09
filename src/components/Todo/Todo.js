import React from 'react';
import './Todo.css';

const Todo = ({ todo, updateTodo }) => {
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
          className="complete-todo-btn"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default Todo;
