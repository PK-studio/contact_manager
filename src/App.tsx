import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ContactList } from "./modules/contactList/ContactList";

const contacts = [
  {
    id: "John_31_01_2018_15_04",
    name: "John Smith",
    email: "john@smith.com",
    modified: "31-01-2018 15:04",
    created: "31-01-2018 15:04"
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
