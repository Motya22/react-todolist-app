import { TodoItem } from '../../entities/todoItem';

const converter = (todos) => (
  todos.map(
    (todo) =>
      new TodoItem({ id: todo.id, title: todo.title, status: todo.completed })
  )
);

export default converter;
