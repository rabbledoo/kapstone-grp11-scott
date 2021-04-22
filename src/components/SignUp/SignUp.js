import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
// import { useStore } from "../../store/store";

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
    setFormData((formData) => ({
      ...formData,
      [inputName]: inputValue,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
     <h3 id="signUp-top">Sign-Up</h3>

    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">

        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={formData.name}

          placeholder="Username"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="displayName">
        <Form.Label>Display Name</Form.Label>
        <Form.Control
          type="text"
          value={formData.displayName}

          placeholder="Display Name"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">

  );
}
export default SignUp;
     
