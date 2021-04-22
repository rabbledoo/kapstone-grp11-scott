import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { postMessage } from "../fetchRequests.js";
import { useStore } from "../store/store";

const MessagePost = (props) => {
  const [message, setMessage] = useState({
    id: "",
    createdBy: "",
    title: "",
    message: "text",
    createdAt: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message.text);
  };

  const handleChange = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    setMessage((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          {" "}
          <Form.Label>Type your message here:</Form.Label>
          <Form.Control
            name="text"
            as="textarea"
            rows={3}
            onChange={handleChange}
            value={message.text}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br></br>
    </div>
  );
};

export default MessagePost;
