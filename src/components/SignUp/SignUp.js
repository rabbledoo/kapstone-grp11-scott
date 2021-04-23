import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { SIGNUP, store } from "../../store/store";
import { signUpRequest } from "../../fetchRequests";

//import "./Login.css";
function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    displayName: "",
    password: "",
  });
  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({
      ...state,
      [inputName]: inputValue,
    }));
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    signUpRequest(
      formData.name,
      formData.displayName,
      formData.password
    ).then((userData) => store.dispatch({ type: SIGNUP, payload: userData }));
  };

  return (
    <>
      <h3 id="signUp-top">Sign-Up</h3>
      <Form onSubmit={handleSignUp}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            placeholder="Username"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="displayName">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type="text"
            name="displayName"
            value={formData.displayName}
            placeholder="Display Name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default SignUp;
