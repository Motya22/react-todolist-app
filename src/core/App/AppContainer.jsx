import { connect } from 'react-redux';
import { fetchTodos, addTodo } from '../../actions/todosActions';
import App from './App';

const mapStateToProps = (state) => (
  { isLoaded: state.todos.isLoaded, todos: state.todos.items }
);

const mapDispatchToProps = {
  fetchTodos,
  addTodo,
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
