import React from "react";
import { Card } from "react-bootstrap";

function UserCard() {
  // const getUserInfo = (username) => {
  //   console.log(username);
  //   return fetch(baseURL + `users/${displayName}`)
  //     .then((res) => res.json())

  //     .catch((error) => console.log(error));
  // };

  return (
    <div id="userInfoCard">
      <br />
      <Card bg="primary" text="white" style={{ width: "90rem" }}>
        <Card.Header>Insert Username Here</Card.Header>
        <Card.Body>
          <Card.Title>Insert Displayname Here</Card.Title>
          <Card.Text>Insert About the User Here</Card.Text>
        </Card.Body>
      </Card>
    </div>

    // <div class="card">
    //   <ul class="list-group list-group-flush">
    //     <li class="list-group-item">
    //       <h4>Bob The Builder</h4>
    //     </li>
    //     <li class="list-group-item">
    //       <h5>friends: 20</h5>
    //     </li>
    //     <li class="list-group-item">
    //       <h5>joined Kreative Kritique: 2 weeks ago</h5>
    //     </li>
    //   </ul>
    // </div>
  );
}
export default UserCard;
