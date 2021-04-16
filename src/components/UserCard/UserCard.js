import React from "react";
import { Card } from "react-bootstrap";
import "./UserCard.css";

function UserCard() {

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

    <div id="userInfoCard">
      <br />
      <Card bg="secondary" text="white" style={{ width: "50rem" }}>
        <Card.Header>Insert Username Here</Card.Header>
        <Card.Body>
          <Card.Title>Insert Displayname Here</Card.Title>
          <Card.Text>Insert About the User Here</Card.Text>
        </Card.Body>
      </Card>
    </div>

  //   <Card style={{ width: '18rem' }}>
  //   <Card.Body>
  //     <Card.Title>Card Title</Card.Title>
  //     <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
  //     <Card.Text>
  //       Some quick example text to build on the card title and make up the bulk of
  //       the card's content.
  //     </Card.Text>
  //     <Card.Link href="#">Card Link</Card.Link>
  //     <Card.Link href="#">Another Link</Card.Link>
  //   </Card.Body>
  // </Card>
  )
}
export default UserCard;
