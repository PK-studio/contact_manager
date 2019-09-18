import React from "react";
import { render, getByText, fireEvent } from "@testing-library/react";
import { ContactEitor } from "./ContactEditor";

describe("Contact editor", () => {
  const renderComponent = (partialProps = {}) => {
    const props = {
      isOpen: true,
      setEditor: () => {},
      ...partialProps
    };
    return render(<ContactEitor {...props} />);
  };

  it("sets editor to false on done button click", () => {
    const setEditor = jest.fn();
    const { getByText } = renderComponent({ setEditor });
    fireEvent.click(getByText("Done"));
    expect(setEditor).toBeCalledTimes(1);
    expect(setEditor).toBeCalledWith(false);
  });
});
