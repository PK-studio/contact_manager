import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { ContactEditor } from "./ContactEditor";

describe("Contact editor", () => {
  const renderComponent = (partialProps = {}) => {
    const props = {
      isOpen: true,
      setEditor: () => {},
      updateName: () => {},
      updateEmail: () => {},
      ...partialProps
    };
    return render(<ContactEditor {...props} />);
  };

  afterEach(cleanup);

  it("sets editor to false on close button click", () => {
    const setEditor = jest.fn();
    const { getByText } = renderComponent({ setEditor });
    fireEvent.click(getByText("Close"));
    expect(setEditor).toBeCalledTimes(1);
    expect(setEditor).toBeCalledWith(false);
  });

  it("call updateName when name changes", () => {
    const updateName = jest.fn();
    const value = "Test new name";
    const { getByLabelText } = renderComponent({ updateName });
    fireEvent.change(getByLabelText("Name"), { target: { value } });
    expect(updateName).toBeCalledWith(value);
  });

  it("call updateEmail when email changes", () => {
    const updateEmail = jest.fn();
    const value = "test.new.email.address@gmail.com";
    const { getByLabelText } = renderComponent({ updateEmail });
    fireEvent.change(getByLabelText("Email"), { target: { value } });
    expect(updateEmail).toBeCalledWith(value);
  });
});
