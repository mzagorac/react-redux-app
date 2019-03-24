import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const ContactDetails = props => {
  if (!props.location.state)
    return <h3>There are no details for that contact!</h3>;
  const { name, phone, email, address, city } = props.location.state;
  return (
    <Card>
      <CardContent>
        <Typography>Name: {name}</Typography>
        <Typography>Phone: {phone}</Typography>
        <Typography>Email: {email}</Typography>
        <Typography>Address: {address}</Typography>
        <Typography>City: {city}</Typography>
        <Link to="/">Go back</Link>
      </CardContent>
    </Card>
  );
};

export default ContactDetails;
