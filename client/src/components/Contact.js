import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { deleteContact, deleteConfirm } from "../actions/contactActions";
import "./styles/Contact.css";

class Contact extends Component {
  handleDelete = id => {
    this.props.confirmDelete(!this.props.delete, id);
    // this.props.contactDelete(id);
  };

  render() {
    const { name, _id } = this.props.contact;
    return (
      <div className="contact-wrapper">
        <h2>{name}</h2>
        <Button onClick={e => this.handleDelete(_id)}>Delete</Button>
        <Link to={{ pathname: "/create", state: { ...this.props.contact } }}>
          <Button>Edit</Button>
        </Link>
        <Link to={{ pathname: "/details", state: { ...this.props.contact } }}>
          <Button>Details</Button>
        </Link>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // contactDelete: id => dispatch(deleteContact(id)),
    confirmDelete: (val, id) => dispatch(deleteConfirm(val, id))
  };
}

function mapStateToProps(state) {
  return {
    delete: state.contacts.confirmDeletion
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Contact);
