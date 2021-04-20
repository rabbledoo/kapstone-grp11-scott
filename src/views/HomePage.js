import React from "react";
// import { useStore } from '../store/store';
import { Container, Col, Row } from "react-bootstrap";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import "../bootstrap.css";

function HomePage(props) {
  // const user = useStore((state) => state.user);

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
              <li>
                Coming Soon: A Direct Messaging system so you can have pritvate
                conversations with other users.
              </li>
              <li>Coming Soon: Friends List, Avatar,</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <Login />
          </Col>
          <Col>
            <SignUp />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
