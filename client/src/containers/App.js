import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchContacts } from "../actions/contactActions";
import { Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import "./App.css";
import Contacts from "../components/Contacts";
import CreateContact from "../components/CreateContact";
import ContactDetails from "../components/ContactDetails";

class App extends Component {
  componentDidMount() {
    this.props.contactsFetch();
  }

  render() {
    return (
      <div className="App">
        <AppBar>
          <Toolbar className="toolbar">
            <Typography variant="h6" color="inherit">
              CONTACTS
            </Typography>
            <Link to="/create" className="add-contact">
              Add contact
            </Link>
          </Toolbar>
        </AppBar>
        <div className="bodyWrapper">
          <Route
            exact
            path="/"
            render={props => <Contacts contacts={this.props.contacts} />}
          />
          <Route path="/create" component={CreateContact} />
          <Route path="/details" component={ContactDetails} />
        </div>
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
