import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Portal from '../Portal/Portal';
import './Modal.scss';

const Modal = ({ title, isModalShown, onToggleModal, children }) => (
  <>
    {isModalShown && (
      <Portal rootType='modal'>
        <div className='modal__overlay' onClick={onToggleModal} role='presentation'>
          <div className='modal__window' onClick={(e) => e.stopPropagation()} role='presentation'>
            <div className='modal__header'>
              <h5 className='modal__title'>{title}</h5>
              <span onClick={onToggleModal} role='presentation'>&times;</span>
            </div>
            <div className='modal__body'>{children}</div>
            <div className='modal__footer'>
              <Button type='submit' formId='add'>
                Ok
              </Button>
              <Button onClick={onToggleModal}>Cancel</Button>
            </div>
          </div>
        </div>
      </Portal>
    )}
  </>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  isModalShown: PropTypes.bool.isRequired,
  onToggleModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
