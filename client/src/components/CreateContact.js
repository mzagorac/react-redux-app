import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { saveContact, editContact } from "../actions/contactActions";
import serialize from "form-serialize";

import "./styles/CreateContact.css";

class CreateContact extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    address: "",
    city: ""
  };

  componentDidMount = () => {
    if (this.props.location.state) {
      const { name, phone, email, address, city } = this.props.location.state;
      this.setState({
        name,
        phone,
        email,
        address,
        city
      });
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitContact = event => {
    event.preventDefault();
    const data = serialize(event.target, { hash: true });
    if (this.props.location.state) {
      this.props.contactEdit(this.props.location.state._id, data);
    } else {
      this.props.contactSave(data);
    }
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="create-contact-wrapper">
        <form onSubmit={this.submitContact} onChange={this.handleChange}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            style={{ margin: 8 }}
            autoComplete="off"
            fullWidth
            required
            value={this.state.name}
          />
          <TextField
            name="phone"
            label="Phone"
            variant="outlined"
            style={{ margin: 8 }}
            autoComplete="off"
            fullWidth
            required
            value={this.state.phone}
          />
          <TextField
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            style={{ margin: 8 }}
            fullWidth
            required
            value={this.state.email}
          />
          <TextField
            name="address"
            label="Address"
            variant="outlined"
            style={{ margin: 8 }}
            autoComplete="off"
            fullWidth
            required
            value={this.state.address}
          />
          <TextField
            name="city"
            label="City"
            variant="outlined"
            style={{ margin: 8 }}
            autoComplete="off"
            fullWidth
            required
            value={this.state.city}
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
    contactSave: contact => dispatch(saveContact(contact)),
    contactEdit: (id, data) => dispatch(editContact(id, data))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CreateContact);
