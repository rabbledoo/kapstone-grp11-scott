import React from "react";
import { Card } from "react-bootstrap";

function UserCard(props) {
  const user = props.user;
  return (
    <div id="userInfoCard">
      <br />
      <Card bg="secondary" text="white" style={{ width: "80rem" }}>
        <Card.Header>
          {user ? user.name : "Sorry, That Information is Not Available."}
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {user ? user.displayName : "Login to see this information."}
          </Card.Title>
          <Card.Text>
            {user
              ? user.about
              : "This information is only available if you are logged in."}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default UserCard;
