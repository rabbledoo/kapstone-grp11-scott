import React from "react";
import { Card } from "react-bootstrap";

function UserCard(props) {
  return (
    <Card style={{ width: "40rem" }}>
      <Card.Title>{props.user.displayName}</Card.Title>
      <Card.Body>
        <Card.Subtitle>{"a.k.a. " + props.user.username}</Card.Subtitle>
        <Card.Text>{props.user.about}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default UserCard;
