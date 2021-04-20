import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {useStore} from "../../store/store";


function UpdateUser(props) {
  const user = useStore((state) => state.user)
  const setNewUser = useStore((state) => state.setNewUser)

  const [formData, setFormData] = useState({
    name: "",
    displayName: "",
    password: "",
    about:"",
  });

  function submitHandler(e) {
     e.preventDefault();
    setNewUser("http://localhost:4000/users",formData)
  }

  return (
    <Form id="updateUser-body" onSubmit={submitHandler}>
      <h3 id="updateUser-top">Edit Profile</h3>
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
          placeholder="Type your password"
          value={formData.password}
          id="inputBox"
          onChange={(e) =>
            setFormData((prevFormData) => {
              return { ...prevFormData, password: e.target.value };
            })
          }
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>About Me</Form.Label>
        <Form.Control
          type="text"
          placeholder="Share something interesting about you"
         value={formData.about}
          id="inputBox"
          onChange={(e) =>
            setFormData((prevFormData) => {
              return { ...prevFormData, about: e.target.value };
            })
          }
        />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        {/* //<Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>
      <Button variant="primary" type="submit" id="SignButton">
        Update 
      </Button>
    </Form>
  );
}
export default UpdateUser;
