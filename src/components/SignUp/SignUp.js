import React, { useState } from "react";
//import "./Login.css";
function SignUp(props) {
  const [formData, setFormData] = useState({
    name: "",
    displayName:"",
    password: "",
  });

  function submitHandler(e){
    e.preventDefault()
    fetch("http://localhost:3000/users",{
      method:"POST",
      body:JSON.stringify(formData)
    })
  }

  return (
    <div id="SignUpTop">
      <h1 id="welcome">welcome to app</h1>
      <form id="SignUp-form" onSubmit={submitHandler}>
        <label>
          <p id="sighnUpTittles">Username</p>
          <input
            type="text"
            value={formData.username}
            placeholder="Username"
            id="inputBox"
            onChange={(e) =>
              setFormData((prevFormData) => {
                return { ...prevFormData, username: e.target.value };
              })
            }
          />
        </label>
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
