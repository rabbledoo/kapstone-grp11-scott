import React from "react";
import { Card } from "react-bootstrap";

function MessageItem(props) {
  const message = props.message;
  return (
    <>
      <Card style={{ width: "50rem" }}>
        <Card.Header>{message.subject}</Card.Header>
        <Card.Body>
          <p>{message.message}</p>
          <p>Created By: {message.username}</p>
          <p>Created On: {Date(message.createdAt).format("MM-DD-YYYY")}</p>
        </Card.Body>
      </Card>
    </>
  );
}

export default MessageItem;
