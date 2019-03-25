import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteContact, deleteConfirm } from "../actions/contactActions";

import "./styles/DeleteConfirmation.css";

class DeleteConfirmation extends Component {
  handleDelete = id => {
    this.props.contactDelete(id);
    this.props.confirmDelete(false);
  };

  handleDeny = () => {
    this.props.confirmDelete(false);
  };

  render() {
    return (
      <div className="delete-confirmation-back">
        <div className="delete-confirmation-content">
          <h3>ARE YOU SURE?</h3>
          <button onClick={() => this.handleDelete(this.props.id)}>Yes</button>
          <button onClick={this.handleDeny}>No</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    id: state.contacts.id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    contactDelete: id => dispatch(deleteContact(id)),
    confirmDelete: val => dispatch(deleteConfirm(val))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteConfirmation);
