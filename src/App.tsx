import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ContactList } from "./modules/contactList/ContactList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Contacts</h1>
        </header>
      </div>
    );
  }
}

export default App;
