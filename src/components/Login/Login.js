import React, { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import { useStore } from "../../store/store";

//finish login form functionality
//make sure it makes post request to right end point
//get token and store in the store
//what endpoints will need token
//what do we need to have token?

//talk with group
//figure out how we wish to store user information
//determine how we pull info when we are logged in

function Login(props) {
  const user = useStore((state) => state.user);
  const setUserLogin = useStore((state) => state.setUserLogin);

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  async function submitHandler(e) {
    e.preventDefault();
    const res = await setUserLogin("http://localhost:4000/login", formData);
    console.log(res)
  }

  return (
    <Form id="login-body" onSubmit={submitHandler}>
      <h3 id="login-top">Log-in</h3>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          onChange={(e) =>
            setFormData((prevFormData) => {
              return { ...prevFormData, name: e.target.value };
            })
          }
        />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setFormData((prevFormData) => {
              return { ...prevFormData, password: e.target.value };
            })
          }
        />
      </Form.Group>
      {/* <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
