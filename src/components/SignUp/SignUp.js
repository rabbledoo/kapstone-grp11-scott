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
<<<<<<< HEAD
    <Form id="signup-body" onSubmit={submitHandler}>
      <h3 id="signUp-top">Sign-Up</h3>
      <Form.Group>
=======
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
>>>>>>> ed535a4 (Saving in order to pull)
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={formData.name}
<<<<<<< HEAD
          placeholder="Name"
          id="inputBoxName"
          onChange={(e) =>
            setFormData((prevFormData) => {
              return { ...prevFormData, name: e.target.value };
            })
          }
        />
      </Form.Group>
      <Form.Group>
=======
          placeholder="Username"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="displayName">
>>>>>>> ed535a4 (Saving in order to pull)
        <Form.Label>Display Name</Form.Label>
        <Form.Control
          type="text"
          value={formData.displayName}
<<<<<<< HEAD
          id="inputBoxDisplayName"
          onChange={(e) =>
            setFormData((prevFormData) => {
              return { ...prevFormData, displayName: e.target.value };
            })
          }
        />
      </Form.Group>

      <Form.Group>
=======
          placeholder="Display Name"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="password">
>>>>>>> ed535a4 (Saving in order to pull)
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={formData.password}
<<<<<<< HEAD
          id="inputBoxPassword"
          onChange={(e) =>
            setFormData((prevFormData) => {
              return { ...prevFormData, password: e.target.value };
            })
          }
        />
      </Form.Group>
      <Button variant="secondary" type="submit" id="SignButton">
=======
          placeholder="Password"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
>>>>>>> ed535a4 (Saving in order to pull)
        Submit
      </Button>
    </Form>
  );
}
export default SignUp;
     
