import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";

import { deleteContact } from "../actions/contactActions";

class Contact extends Component {
  handleClick = id => {
    this.props.contactDelete(id);
  };

  render() {
    const { name, _id } = this.props.contact;
    return (
      <div>
        <h2>{name}</h2>
        <Button onClick={() => this.handleClick(_id)}>Delete</Button>
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
