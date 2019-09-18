import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { ContactEditor } from "../contactEditor/ContactEditor";
// import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

export type Contact = {
  id: string;
  name: string;
  email: string;
  modified: string;
  created: string;
};

type ContactListProps = {
  contacts: Contact[];
};

export const ContactList = ({ contacts }: ContactListProps) => {
  const [isEditorOpen, setEditor] = useState(false);
  const [selectedId, selectId] = useState("");
  const [contactList, updateContactList] = useState<Contact[]>(contacts);

  const onUpdateName = (value: string) => {
    const contacts = contactList.map(contact => {
      if (contact.id != selectedId) return contact;
      return {
        ...contact,
        name: value
      };
    });
    updateContactList(contacts);
  };

  const onUpdateEmail = (value: string) => {
    const contacts = contactList.map(contact => {
      if (contact.id != selectedId) return contact;
      return {
        ...contact,
        email: value
      };
    });
    updateContactList(contacts);
  };

  return (
    <div className="contact-list">
      {contactList.map(contact => (
        <div key={contact.created} className="contact-list-row">
          <p>{contact.name}</p>
          <p>{contact.email}</p>
          <div className={"contact-list-buttons"}>
            <Button variant="contained" color="secondary">
              Delete
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setEditor(true);
                selectId(contact.id);
              }}
            >
              Edit
            </Button>
          </div>
        </div>
      ))}

      <div className="under-list">
        <Button variant="contained" onClick={() => {}}>
          Add contact
        </Button>
      </div>

      <ContactEditor
        isOpen={isEditorOpen}
        setEditor={setEditor}
        updateName={onUpdateName}
        updateEmail={onUpdateEmail}
        contact={contactList.find(contact => contact.id === selectedId)}
      />
    </div>
  );
};
