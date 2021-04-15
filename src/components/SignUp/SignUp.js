import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {useStore} from "../../store/store";

//import "./Login.css";
function SignUp(props) {
  const user = useStore((state) => state.user)
  const setNewUser = useStore((state) => state.setNewUser)

  const [formData, setFormData] = useState({
    name: "",
    displayName: "",
    password: "",
  });

  function submitHandler(e) {
    

    e.preventDefault();
    // fetch("http://localhost:4000/users", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });
    setNewUser("http://localhost:4000/users",formData)
  }

  return (
    <Form id="signup-body" onSubmit={submitHandler}>
      <h3 id="signUp-top">Sign-Up</h3>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={formData.name}
          placeholder="Name"
          id="inputBox"
          onChange={(e) =>
            setFormData((prevFormData) => {
              return { ...prevFormData, name: e.target.value };
            })
          }
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Display Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Display Name"
          value={formData.displayName}
          id="inputBox"
          onChange={(e) =>
            setFormData((prevFormData) => {
              return { ...prevFormData, displayName: e.target.value };
            })
          }
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={formData.password}
          id="inputBox"
          onChange={(e) =>
            setFormData((prevFormData) => {
              return { ...prevFormData, password: e.target.value };
            })
          }
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" id="SignButton">
        Submit
      </Button>
    </Form>
  );
}
export default SignUp;
