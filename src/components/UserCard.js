import React from "react";
// import { Card } from "react-bootstrap";
import "./UserCard.css";
function Kard() {

  // function submitHandler(e) {
  //   e.preventDefault();
  //   fetch("http://localhost:4000/users + `${username", {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(formData),
  //   });
  //   
  // }

  // const getUserInfo = (username) => {
  //   console.log(username);
  //   return fetch(baseURL + `users/${displayName}`)
  //     .then((res) => res.json())
  
  //     .catch((error) => console.log(error));
  // };


  return (
    <div class="card">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <h4>Bob The Builder</h4>
        </li>
        <li class="list-group-item">
          <h5>friends: 20</h5>
        </li>
        <li class="list-group-item">
          <h5>joined Kreative Kritique: 2 weeks ago</h5>
        </li>
      </ul>
    </div>
  );
}
export default Kard;
