import React from "react";
import Modal from "@material-ui/core/Modal";
import { Button, TextField } from "@material-ui/core";
import { Contact } from "../contactList/ContactList";

type ContactEditorProps = {
  isOpen: boolean;
  setEditor: (state: boolean) => void;
  updateName: (value: string) => void;
  updateEmail: (value: string) => void;
  contact?: Contact;
};

export const ContactEditor = ({
  isOpen,
  contact,
  setEditor,
  updateName,
  updateEmail
}: ContactEditorProps) => {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={() => {
          setEditor(false);
        }}
      >
        <div className="contact-editor">
          <h3>Contact details</h3>

          <form className="contact-form" noValidate autoComplete="off">
            <TextField
              id="contact-editor-name"
              label="Name"
              aria-labelledby="contact-editor-name"
              value={contact ? contact.name : ""}
              margin="normal"
              onChange={event => {
                updateName(event.target.value);
              }}
            />
            <TextField
              id={"contact-editor-email"}
              label="Email"
              aria-labelledby="contact-editor-email"
              value={contact ? contact.email : ""}
              margin="normal"
              onChange={event => {
                updateEmail(event.target.value);
              }}
            />

            <TextField
              disabled
              id={"contact-editor-email"}
              label="Created"
              aria-labelledby="contact-editor-email"
              value={contact ? contact.created : ""}
              margin="normal"
              onChange={event => {
                updateEmail(event.target.value);
              }}
            />

            <TextField
              disabled
              id={"contact-editor-email"}
              label="Last modified"
              aria-labelledby="contact-editor-email"
              value={contact ? contact.modified : ""}
              margin="normal"
              onChange={event => {
                updateEmail(event.target.value);
              }}
            />
          </form>

          <Button
            variant="contained"
            onClick={() => {
              setEditor(false);
            }}
          >
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};
