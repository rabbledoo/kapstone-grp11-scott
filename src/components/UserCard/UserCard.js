import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useStore } from "../../store/store";

//import error, getProfile fetch function is housed within the store,
//currently not calling the store.
//how do we import correctly?
//we want to set the global state and local state simultaneously
//first time we are calling info in this app

function UserCard(props) {
  // const userProfile = useStore((state) => state.userProfile);
  const user = useStore((state) => state.user);

  // useEffect(() => {
  //   getProfile(`http://localhost:4000/users/${id}`).then((userData) => {
  //     setProfile(userData);
  //     console.log(userData);
  //   });
  // }, []);

  // title={userProfile ? userProfile.user.username : null}
  //         description={userProfile ? userProfile.user.displayName : null}

  //source: tianna mccoy
  return (
    <div id="userInfoCard">
      <br />
      <Card bg="secondary" text="white" style={{ width: "50rem" }}>
        <Card.Header>
          {user ? user.name : "Sorry, That Information is Not Available."}
        </Card.Header>
        <Card.Body>
          <Card.Title>Also Know As: Insert displayName Here</Card.Title>
          <Card.Text>Insert About the User Here</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default UserCard;
