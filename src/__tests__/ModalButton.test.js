import React from "react";
import { render } from "react-testing-library";
import ModalButton from "../ModalButton";

const context = {
  openModal: jest.fn()
};

describe("ModalButton", () => {
  it("should call open modal function when clicked", () => {
    const { getByText } = render(<ModalButton context={context} />);

    getByText("Open modal").click();

    expect(context.openModal).toHaveBeenCalled();
  });
});
