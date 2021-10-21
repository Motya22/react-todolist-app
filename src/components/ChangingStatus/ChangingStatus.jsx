import PropTypes from 'prop-types';
import './ChangingStatus.scss';

const ChangingStatus = ({ onClick }) => (
  <div className='changingStatus'>
    <ul className='changingStatus__list' onClick={onClick} onKeyPress={() => {}} role='listbox'>
      <li>Todo</li>
      <li>In Progress</li>
      <li>Completed</li>
    </ul>
  </div>
);

ChangingStatus.propTypes = { onClick: PropTypes.func, };

ChangingStatus.defaultProps = { onClick: () => {}, };

export default ChangingStatus;
