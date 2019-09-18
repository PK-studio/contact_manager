import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";

type ContactEditorProps = {
  isOpen: boolean;
  setEditor: (state: boolean) => void;
};

export const ContactEitor = ({ isOpen, setEditor }: ContactEditorProps) => {
  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isOpen}
        onClose={() => {
          setEditor(false);
        }}
      >
        <div className="contact-editor">
          <h2 id="simple-modal-title">Edit contact.</h2>

          <Button
            variant="contained"
            onClick={() => {
              setEditor(false);
            }}
          >
            Done
          </Button>
        </div>
      </Modal>
    </div>
  );
};
