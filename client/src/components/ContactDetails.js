import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./styles/ContactDetails.css";

const ContactDetails = props => {
  if (!props.location.state)
    return <h3>There are no details for that contact!</h3>;
  const { name, phone, email, address, city } = props.location.state;
  return (
    <Card className="contact-details-wrapper">
      <CardContent>
        <Typography>Name: {name}</Typography>
        <Typography>Phone: {phone}</Typography>
        <Typography>Email: {email}</Typography>
        <Typography>Address: {address}</Typography>
        <Typography>City: {city}</Typography>
        <Typography className="contact-details-back" variant="h5">
          <Link to="/">Go back</Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ContactDetails;
