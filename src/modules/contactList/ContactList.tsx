import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { ContactEitor } from "../contactEditor/ContactEditor";

type ContactListProps = {
  contacts: {
    name: string;
    email: string;
    modified: string;
    created: string;
  }[];
};

export const ContactList = ({ contacts }: ContactListProps) => {
  const [isEditorOpen, setEditor] = useState(false);

  return (
    <div className="contact-list">
      <Button variant="contained">Add contact</Button>
      {contacts.map(contact => (
        <div key={contact.created} className="contact-list-row">
          <p>{contact.name}</p>
          <p>{contact.email}</p>
          <div className={"contact-list-buttons"}>
            <Button variant="contained">Delete</Button>
            <Button
              variant="contained"
              onClick={() => {
                setEditor(true);
              }}
            >
              Edit
            </Button>
          </div>
        </div>
      ))}
      <ContactEitor isOpen={isEditorOpen} setEditor={setEditor} />
    </div>
  );
};
