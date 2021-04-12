import React, { useState } from "react";
//import "./Login.css";
function SignUp(props) {
  const [formData, setFormData] = useState({
    name: "",
    displayName: "",
    password: "",
  });

  function submitHandler(e) {
    e.preventDefault();
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData),
    });
  //   axios.post('url:/users', (req, res) => {
  //     name, displayName, password
  //     })
  }

  return (
    <div id="SignUpTop">
      <h1 id="welcome">welcome to app</h1>
      <form id="SignUp-form" onSubmit={submitHandler}>
        <label>
          <p id="sighnUpTittles">Name</p>
          <input
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
          <p id="sighnUpTittles">Display Name</p>
          <input
            type="text"
            value={formData.displayName}
            placeholder="Display Name"
            id="inputBox"
            onChange={(e) =>
              setFormData((prevFormData) => {
                return { ...prevFormData, displayName: e.target.value };
              })
            }
          />
        </label>
        <br></br>
        <label>
          <p id="signUpTittles">Password</p>
          <input
            type="password"
            value={formData.password}
            placeholder="Password"
            id="inputBox"
            onChange={(e) =>
              setFormData((prevFormData) => {
                return { ...prevFormData, password: e.target.value };
              })
            }
          />
        </label>
        <div>
          <div id="space"></div>
          <button type="submit" id="SignButton">
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
