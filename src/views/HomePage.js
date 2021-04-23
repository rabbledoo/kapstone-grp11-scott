import React from "react";
import { useStore } from "../store/store";
import { Container, Col, Row } from "react-bootstrap";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import "../bootstrap.css";

function HomePage(props) {
  const user = useStore((state) => state.user);

  return (
    <div id="HomePage">
      <Container id="Homepage">
        <Row>
          <Col>
            <h1 className="siteName"> Kreative Kritique </h1>
            <p>
              A place to share your original creative works and get critiques
              from other creative people.
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul>
              <li>Chatroom where you can discuss and critique works</li>
              <li>Coming Soon: Direct Private Messaging</li>
              <li>Coming Soon: Friends Lists And Avatars</li>
            </ul>
            <h2>Login, or Sign Up for a Free Account!</h2>
          </Col>
        </Row>
        <Row>
          <Col>{!user.name ? <Login /> : "Successfully Logged In."} </Col>
          <Col>{!user.name ? <SignUp /> : " "}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
