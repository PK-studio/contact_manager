import React from "react";
import { ContactList } from "./ContactList";
import { render, cleanup, fireEvent } from "@testing-library/react";

describe("Contact list", () => {
  const renderComponent = (partialContact = {}) => {
    const contact = {
      id: "test_contact_id",
      name: "Test name",
      email: "test email",
      modified: "01-01-0001 01:01",
      created: "00-00-0000 00:00",
      ...partialContact
    };

    return render(<ContactList contacts={[contact]} />);
  };

  afterEach(cleanup);

  it("displays provided contacts", () => {
    const name = "Test contact name";
    const { getByText } = renderComponent({ name });
    expect(getByText(name)).toBeTruthy();
  });

  it("displays provided email", () => {
    const email = "Test.contact@email.com";
    const { getByText } = renderComponent({ email });
    expect(getByText(email)).toBeTruthy();
  });

  it("contacts contain add button", () => {
    const { getByText } = renderComponent();
    expect(getByText("Add contact")).toBeTruthy();
  });

  it("contacts contain delete button", () => {
    const { getByText } = renderComponent();
    expect(getByText("Delete")).toBeTruthy();
  });

  it("contacts contain edit button", () => {
    const { getByText } = renderComponent();
    expect(getByText("Edit")).toBeTruthy();
  });

  it("removes contact on delete click", () => {
    const name = "Name to remove";
    const { container, getByText } = renderComponent({ name });
    const displayedName = getByText(name);
    expect(container.contains(displayedName)).toBeTruthy();
    fireEvent.click(getByText("Delete"));
    expect(container.contains(displayedName)).toBeFalsy();
  });

  it("adds contact on add contact click", () => {
    const { getByText, getAllByText } = renderComponent();
    expect(getAllByText("Edit")).toHaveLength(1);
    fireEvent.click(getByText("Add contact"));
    expect(getAllByText("Edit")).toHaveLength(2);
  });
});
