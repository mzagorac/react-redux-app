import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { saveContact } from "../actions/contactActions";
import serialize from "form-serialize";

class CreateContact extends Component {
  submitContact = event => {
    event.preventDefault();
    const data = serialize(event.target, { hash: true });
    this.props.contactSave(data);
    this.props.history.push("/");
  };

  render() {
    return (
      <div style={{ width: "45%" }}>
        <form onSubmit={this.submitContact}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            style={{ margin: 8 }}
            autoComplete="off"
            fullWidth
            required
          />
          <TextField
            name="phone"
            label="Phone"
            variant="outlined"
            style={{ margin: 8 }}
            autoComplete="off"
            fullWidth
            required
          />
          <TextField
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            style={{ margin: 8 }}
            fullWidth
            required
          />
          <TextField
            name="address"
            label="Address"
            variant="outlined"
            style={{ margin: 8 }}
            autoComplete="off"
            fullWidth
            required
          />
          <TextField
            name="city"
            label="City"
            variant="outlined"
            style={{ margin: 8 }}
            autoComplete="off"
            fullWidth
            required
          />
          <Button type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    contactSave: contact => dispatch(saveContact(contact))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CreateContact);
