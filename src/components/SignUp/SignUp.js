import React from "react";
//import "./Login.css";
function SignUp(props) {
  return (
    <div id="SignUpTop">
      <h1 id="welcome">welcome to app</h1>
      <form id="SignUp-form">
        <label>
          <p id="sighnUpTittles">Username</p>
          <input type="text" placeholder="Username" id="inputBox" />
        </label>
        <label>
          <p id="signUpTittles">Password</p>
          <input type="password" placeholder="Password" id="inputBox" />
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
