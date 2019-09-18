import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ContactList } from "./modules/contactList/ContactList";

const contacts = [
  {
    name: "Test name",
    email: "test email",
    modified: "01-01-0001 01:01",
    created: "00-00-0000 00:00"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Contacts</h1>
          <ContactList contacts={contacts} />
        </header>
      </div>
    );
  }
}

export default App;
