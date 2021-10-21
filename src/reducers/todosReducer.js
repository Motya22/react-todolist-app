import {
  SHOW_ERROR,
  FETCH_TODOS,
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  CHANGE_TODO_STATUS,
} from '../actions/todosActions';

const initialState = {
  isLoaded: false,
  error: null,
  items: [],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, isLoaded: true, items: action.payload };
    case SHOW_ERROR:
      return { ...state, isLoaded: true, error: action.payload };
    case ADD_TODO:
      return { ...state, items: [...state.items, action.payload] };
    case REMOVE_TODO:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case EDIT_TODO:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, title: action.payload.newTodoName }
            : item
        ),
      };
    case CHANGE_TODO_STATUS:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, status: action.payload.newTodoStatus === 'Completed' }
            : item
        ),
      };
    default:
      return state;
  }
};
