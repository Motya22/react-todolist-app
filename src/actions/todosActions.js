import TodosApi from '../api/todosApi/provider';

export const FETCH_TODOS = 'FETCH_TODOS';
export const SHOW_ERROR = 'SHOW_ERROR';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS';

export const fetchTodos = () => (
  (dispatch) => {
    TodosApi.getTodos()
      .then((result) => dispatch({ type: FETCH_TODOS, payload: result }))
      .catch((error) => dispatch(showError(error.message)))
  }
);

export const showError = (errorMessage) => (
  { type: SHOW_ERROR, payload: errorMessage }
);

export const addTodo = (newTodo) => (
  { type: ADD_TODO, payload: newTodo }
);

export const removeTodo = (id) => (
  { type: REMOVE_TODO, payload: id }
);

export const editTodo = (newTodoName, id) => (
  { type: EDIT_TODO, payload: { newTodoName, id } }
);

export const changeTodoStatus = (newTodoStatus, id) => (
  { type: CHANGE_TODO_STATUS, payload: { newTodoStatus, id } }
);
