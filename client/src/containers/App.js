import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchContacts } from "../actions/contactActions";
import { Route, Link } from "react-router-dom";

import "./App.css";
import Contacts from "../components/Contacts";
import CreateContact from "../components/CreateContact";

// import { BASE_URL } from "../config/config";

class App extends Component {
  componentDidMount() {
    this.props.contactsFetch();
  }

  render() {
    return (
      <div className="App">
        <Link to="/create">Add contact</Link>
        <Route
          exact
          path="/"
          render={props => <Contacts contacts={this.props.contacts} />}
        />
        <Route path="/create" component={CreateContact} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    contactsFetch: () => dispatch(fetchContacts())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
