import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

export const ContactList = ({ contacts } = {}) => {
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      modified: PropTypes.string,
      created: PropTypes.string
    })
  )
};
