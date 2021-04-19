import React from "react";
import { Image, ListGroup } from "react-bootstrap";
import usersData from "../../assets/usersData.json";

function FriendsList() {
  //temporary user with friendslist
  const user = usersData[0];
  return (
    <>
      <ListGroup>
        <ListGroup.Item>
          <h2>Freinds:</h2>
        </ListGroup.Item>
        {user.freinds.map((friend) => (
          <ListGroup.Item>
            <Image src="../../assets/images/defaultuseravatar.png"></Image>
            {friend}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default FriendsList;
