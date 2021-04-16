import React from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
function Login(props) {
  return (
    <Form id="login-body">
      <h3 id="login-top">Log-in</h3>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />

        <Form.Text className="text-muted">
          Your name will not be displayed for other users, just your display
          name
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />

      {/* <Form.Group controlId="formBasicCheckbox"> */}
      {/* <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="secondary" type="submit">

        Submit
      </Button>
    </Form>
  );
}

export default Login;
