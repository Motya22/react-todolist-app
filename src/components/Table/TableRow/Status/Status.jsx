import PropTypes from 'prop-types';
import Button from '../../../Button/Button';

const TypeToStatusMap = {
  toDo: {
    text: 'Todo',
    className: 'todoStatus',
  },
  inProgress: {
    text: 'In Progress',
    className: 'progress',
  },
  complete: {
    text: 'Completed',
    className: 'completed',
  },
};

const Status = ({ type, onStatusClick }) => {
  const { text, className } = TypeToStatusMap[type];

  return (
    <Button className={className} onClick={onStatusClick}>
      {text}
    </Button>
  );
};

Status.propTypes = {
  type: PropTypes.string,
  onStatusClick: PropTypes.func,
};

Status.defaultProps = {
  type: '',
  onStatusClick: () => {},
};

export default Status;
