import React, { useContext } from 'react';
import TodoContext from '../context/todoContext';
import TodoItem from './TodoItem';

const Todos = () => {
  const todoContext = useContext(TodoContext);
  const { todos } = todoContext;

  return (
    todos.length > 0 && (
      <div>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    )
  );
};

export default Todos;
