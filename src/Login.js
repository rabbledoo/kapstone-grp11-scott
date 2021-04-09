import React from "react";
import "./Login.css";
function login(props) {
  return (
    <div id="loginTop">
      <h1 id="welcome">welcome to app</h1>
      <div id="formOne">
        <form id="login-form">
          <label>
            <p id="tittles">Username</p>
            <input type="text" placeholder="Username" id="inputBox" />
          </label>
          <label>
            <p id="tittles">Password</p>
            <input type="password" placeholder="Password" id="inputBox" />
          </label>
          <div>
            <div id="space"></div>
            <button type="submit" id="loginButton">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default login;
