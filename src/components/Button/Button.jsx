import PropTypes from "prop-types";
import clsx from "clsx";
import "./Button.scss";

const Button = ({ type, className, formId, onClick, children }) => (
  <button
    type={type}
    className={clsx(["button", className])}
    form={formId}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  formId: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.element.isRequired,
};

Button.defaultProps = {
  type: "",
  className: "",
  formId: "",
  onClick: () => {},
};

export default Button;
