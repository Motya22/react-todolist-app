import { useSelector } from 'react-redux';
import TableRow from './TableRow/TableRow';
import './Table.scss';

const Table = () => {
  const todos = useSelector((state) => state.todos.items);
  const errorMessage = useSelector((state) => state.todos.error);

  return (
    <table className='todo__list'>
      <thead>
        <tr>
          <th>#</th>
          <th>Task Name</th>
          <th>Status</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {todos.length
          ? (todos.map((todo) => <TableRow key={todo.id} todo={todo} />))
          : (<tr>
              <td colSpan='5'>No todos.</td>
            </tr>)}
        {errorMessage
          ? (<tr>
              <td colSpan='5' style={{ color: 'red', textAlign: 'center' }}>
                Error: {errorMessage}
              </td>
            </tr>)
          : null}
      </tbody>
    </table>
  );
};

export default Table;
