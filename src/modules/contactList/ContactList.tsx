import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { ContactEditor } from "../contactEditor/ContactEditor";

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
  const [selectedId, setId] = useState("");
  const [contactList, updateContactList] = useState<Contact[]>(contacts);

  const getDate = () => {
    const date = new Date();
    return `${date.getDay()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  };

  const onCreateContact = () => {
    const id = `contact_${Date.now()}`;
    const contacts = [
      ...contactList,
      {
        id,
        name: "",
        email: "",
        modified: getDate(),
        created: getDate()
      }
    ];
    updateContactList(contacts);
    setEditor(true);
    setId(id);
  };

  const onRemoveContact = (id: string) => {
    const contactIndex = contactList.findIndex(contact => contact.id === id);
    const contacts = [...contactList];
    contacts.splice(contactIndex, 1);
    updateContactList(contacts);
  };

  const onUpdateName = (value: string) => {
    const contacts = contactList.map(contact => {
      if (contact.id != selectedId) return contact;
      return {
        ...contact,
        name: value,
        modified: getDate()
      };
    });
    updateContactList(contacts);
  };

  const onUpdateEmail = (value: string) => {
    const contacts = contactList.map(contact => {
      if (contact.id != selectedId) return contact;
      return {
        ...contact,
        email: value,
        modified: getDate()
      };
    });
    updateContactList(contacts);
  };

  return (
    <div className="contact-list">
      {contactList.map(contact => (
        <div key={contact.id} className="contact-list-row">
          <p>{contact.name}</p>
          <p>{contact.email}</p>
          <div className={"contact-list-buttons"}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                onRemoveContact(contact.id);
              }}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setEditor(true);
                setId(contact.id);
              }}
            >
              Edit
            </Button>
          </div>
        </div>
      ))}

      <div className="under-list">
        <Button variant="contained" onClick={onCreateContact}>
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
