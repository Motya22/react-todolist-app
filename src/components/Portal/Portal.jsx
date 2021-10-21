import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

class Portal extends Component {
  constructor(props) {
    super(props);
    const { rootType } = this.props;

    this.rootNode = document.getElementById(`${rootType}-root`);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    this.rootNode.appendChild(this.el);
  }

  componentWillUnmount() {
    this.rootNode.removeChild(this.el);
  }

  render() {
    const { children } = this.props;

    return createPortal(children, this.el);
  }
}

Portal.propTypes = {
  rootType: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Portal;
