import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO, EDIT_TODO } from './types';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload]
      };

    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        )
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload)
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload.id
            ? { ...todo, title: payload.editedTitle }
            : todo
        )
      };
  }
};
