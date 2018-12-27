import React from "react";
import ModalContext from "./ModalContext";
import Modal from "./Modal";
import ModalButton from "./ModalButton";

export default class App extends React.Component {
  state = {
    isModalOpen: false
  };

  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  };

  render() {
    return (
      <ModalContext.Provider
        value={{
          isModalOpen: this.state.isModalOpen,
          openModal: this.openModal
        }}
      >
        <Modal isModalOpen={this.state.isModalOpen} />
        <ModalContext.Consumer>
          {context => <ModalButton context={context} />}
        </ModalContext.Consumer>
      </ModalContext.Provider>
    );
  }
}
