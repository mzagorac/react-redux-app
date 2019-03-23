import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  render() {
    return this.props.contacts.map(contact => {
      return <Contact key={contact._id} contact={contact} />;
    });
  }
}

export default Contacts;
