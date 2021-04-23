import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import { LOGIN, store } from "../../store/store";
import { loginRequest } from "../../fetchRequests";

//finish login form functionality
//make sure it makes post request to right end point
//get token and store in the store
//what endpoints will need token
//what do we need to have token?

//talk with group
//figure out how we wish to store user information
//determine how we pull info when we are logged in

function Login(props) {
  // const user = useStore((state) => state.user);
  // const setUserLogin = useStore((state) => state.setUserLogin);

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  function submitHandler(e) {
    e.preventDefault();
    loginRequest(formData.name, formData.password).then((userData) =>
      store.dispatch({ type: LOGIN, payload: userData })
    );
  }

  return (
    <Form id="login-body" onSubmit={submitHandler}>
      <h3 id="login-top">Log-in</h3>
      <Form.Group controlId="usernamelogin">
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
      </Form.Group>

      <Form.Group controlId="passwordLogin">
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

      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
