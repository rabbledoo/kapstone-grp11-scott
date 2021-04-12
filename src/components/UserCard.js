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
  );
}
export default Kard;
