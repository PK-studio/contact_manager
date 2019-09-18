import React from "react";
import Button from "@material-ui/core/Button";

type ContactListProps = {
  contacts: {
    name: string;
    email: string;
    modified: string;
    created: string;
  }[];
};

export const ContactList = ({ contacts }: ContactListProps) => {
  return (
    <div className={"contact-list"}>
      {contacts.map(contact => (
        <div key={contact.created} className="contact-list-row">
          <p>{contact.name}</p>
          <Button variant="contained">View</Button>
          <Button variant="contained">Add</Button>
          <Button variant="contained">Delete</Button>
          <Button variant="contained">Edit</Button>
        </div>
      ))}
    </div>
  );
};
