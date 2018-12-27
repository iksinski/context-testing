import React from "react";
import PropTypes from "prop-types";

const Modal = ({ isModalOpen }) => (isModalOpen ? <div>Modal</div> : null);

export default Modal;

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired
};
