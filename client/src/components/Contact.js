import React, { Component } from "react";
import { Button, Avatar } from "@material-ui/core/";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { deleteConfirm } from "../actions/contactActions";
import "./styles/Contact.css";

class Contact extends Component {
  handleDelete = id => {
    this.props.confirmDelete(!this.props.delete, id);
  };

  render() {
    const { name, _id } = this.props.contact;
    return (
      <div className="contact-wrapper">
        <Avatar style={{ marginRight: "12px" }}>
          {name.substring(0, 1).toUpperCase()}
        </Avatar>
        <h2 className="contact-wrapper_item-one">{name}</h2>
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
    confirmDelete: (val, id) => dispatch(deleteConfirm(val, id))
  };
}
export default connect(
  null,
  mapDispatchToProps
)(Contact);
