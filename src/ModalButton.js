import React from "react";
import PropTypes from "prop-types";

export default function ModalButton({ context }) {
  return <button onClick={context.openModal}>Open modal</button>;
}

ModalButton.propTypes = {
  context: PropTypes.shape({
    openModal: PropTypes.func.isRequired
  })
};
