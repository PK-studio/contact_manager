import React from "react";
import { ContactList } from "./ContactList";
import { render, cleanup } from "@testing-library/react";

describe("Contact list", () => {
  const renderComponent = (partialContact = {}) => {
    const contacts = [
      {
        id: "test_contact_id",
        name: "Test name",
        email: "test email",
        modified: "01-01-0001 01:01",
        created: "00-00-0000 00:00",
        ...partialContact
      }
    ];
    return render(<ContactList contacts={contacts} />);
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
});
