import React, { useState, useEffect } from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import Moment from "moment";
import { getMessage } from "../../fetchRequests";

const Message = ({ match }) => {
const [message, setMessage] = useState({});

useEffect(() => {
    getMessage(match.params.id)
    getMessage(`http://localhost:4000/users/${id}`).then((userData) => {
    }, []);
});

return (
    <h1>
<Card style={{ width: "18rem" }}>
        <Card.Body><Card.Title>Created By: {message.username}</Card.Title>
        <Card.Title>Created On: {Moment(message.createdAt).format("MM-DD-YYYY")}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroupItem>{message.text}</ListGroupItem>
        </ListGroup>
</Card>
    </h1>
),
};

export default Message;