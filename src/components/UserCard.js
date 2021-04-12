import React from "react";
import { Card } from "react-bootstrap";
import "./UserCard.css";
function Kard() {
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

    // <div class="card1">
    //   <img
    //     src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Bob_the_builder.jpg/220px-Bob_the_builder.jpg"
    //     class="user-image"
    //     alt="..."
    //   />
    //   <div class="card-body">
    //     <h3 class="username">Bob the Builder</h3>
    //     <h4 class="friends">friends: 10</h4>

    //     <h5 class="date">date joined: 2 months ago</h5>
    //   </div>
    // </div>
  );
}
export default Kard;
