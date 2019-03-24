import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { deleteContact } from "../actions/contactActions";

class Contact extends Component {
  handleDelete = id => {
    this.props.contactDelete(id);
  };

  render() {
    const { name, _id } = this.props.contact;
    return (
      <div>
        <h2>{name}</h2>
        <Button onClick={() => this.handleDelete(_id)}>Delete</Button>
        <Link to={{ pathname: "/create", state: { ...this.props.contact } }}>
          <Button>Edit</Button>
        </Link>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    contactDelete: id => dispatch(deleteContact(id))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Contact);
