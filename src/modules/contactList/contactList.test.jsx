import React from "react";
import { ContactList } from "./ContactList";
import { render } from "@testing-library/react";

describe("Contact list", () => {
  const renderComponent = (partialContact = {}) => {
    const contacts = [
      {
        name: "Test name",
        email: "test email",
        modified: "01-01-0001 01:01",
        created: "00-00-0000 00:00",
        ...partialContact
      }
    ];
    return render(<ContactList contacts={contacts} />);
  };

  it("displays provided contacts", () => {
    const name = "Test contact name";
    const { getByText } = renderComponent({ name });
    expect(getByText(name)).toBeTruthy();
  });

  it("contacts contain view button", () => {
    const { getByText } = renderComponent();
    expect(getByText("View")).toBeTruthy();
  });

  it("contacts contain add button", () => {
    const { getByText } = renderComponent();
    expect(getByText("Add")).toBeTruthy();
  });

  it("contacts contain delete button", () => {
    const { getByText } = renderComponent();
    expect(getByText("Delete")).toBeTruthy();
  });

  it("contacts contain edit button", () => {
    const { getByText } = renderComponent();
    expect(getByText("Edit")).toBeTruthy();
  });
});
