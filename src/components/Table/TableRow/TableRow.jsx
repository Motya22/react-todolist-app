import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '../../Button/Button';
import Icon from './Icon/Icon';
import Status from './Status/Status';
import ChangingStatus from '../../ChangingStatus/ChangingStatus';
import './TableRow.scss';

import {
  removeTodo,
  editTodo,
  changeTodoStatus,
} from '../../../actions/todosActions';

const TableRow = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEdited, setIsEdited] = useState(false);
  const [isStatusChanging, setIsStatusChanging] = useState(false);

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEditTodo = (newTodoName, id) => {
    if (newTodoName.trim()) {
      dispatch(editTodo(newTodoName, id));
    }
  };

  const handleChangeTodoStatus = (newTodoStatus, id) => {
    dispatch(changeTodoStatus(newTodoStatus, id));
  };

  return (
    <tr className={clsx(['todo__item', todo.status && 'completed'])}>
      <td>{todo.id}</td>
      <td>
        {isEdited ? (
          <textarea
            defaultValue={todo.title}
            onChange={(e) => handleEditTodo(e.target.value, todo.id)}
            maxLength='80'
          />
        ) : (
          todo.title
        )}
      </td>
      <td>
        <Status
          type={todo.status ? 'complete' : 'toDo'}
          onStatusClick={() =>
            setIsStatusChanging((prevIsStatusChanging) => !prevIsStatusChanging)
          }
        />
        {isStatusChanging && (
          <ChangingStatus
            onClick={(e) =>
              handleChangeTodoStatus(
                e.target.innerText,
                todo.id,
                setIsStatusChanging(
                  (prevIsStatusChanging) => !prevIsStatusChanging
                )
              )
            }
          />
        )}
      </td>
      <td>
        <Button
          className='edit'
          onClick={() => setIsEdited((prevIsEdited) => !prevIsEdited)}
        >
          {isEdited ? <Icon type='done' /> : <Icon type='edit' />}
        </Button>
      </td>
      <td>
        <Button className='remove' onClick={() => handleRemoveTodo(todo.id)}>
          <Icon type='remove' />
        </Button>
      </td>
    </tr>
  );
};

TableRow.propTypes = { todo: PropTypes.objectOf(PropTypes.any).isRequired, };

export default TableRow;
