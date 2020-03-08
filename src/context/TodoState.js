import React, { useReducer } from 'react';
import todoContext from './todoContext';
import todoReducer from './todoReducer';
import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO, EDIT_TODO } from './types';

const TodoState = props => {
  const initialState = {
    todos: []
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Add todo
  const addTodo = todo => {
    dispatch({
      type: ADD_TODO,
      payload: todo
    });
  };

  // Mark as completed
  const toggleCompleted = id => {
    dispatch({
      type: TOGGLE_COMPLETED,
      payload: id
    });
  };

  // Delete todo
  const deleteTodo = id => {
    dispatch({
      type: DELETE_TODO,
      payload: id
    });
  };

  // Edit todo
  const editTodo = ({ id, editedTitle }) => {
    dispatch({
      type: EDIT_TODO,
      payload: { id, editedTitle }
    });
  };

  return (
    <todoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        toggleCompleted,
        deleteTodo,
        editTodo
      }}
    >
      {props.children}
    </todoContext.Provider>
  );
};

export default TodoState;
