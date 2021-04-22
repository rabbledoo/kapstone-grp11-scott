import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStore } from "../../store/store";

export default function NavBar(props) {
  //temporary username for functionality testing.
  const username = useStore((state) => state.user);
  const currentState = useStore((state) => state);
  console.log(currentState);
  return (
    <>
      <Navbar sticky="top" bg="primary" variant="dark">
        <Navbar.Brand>KreativeKritique</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/chatroom">
            Chat Room
          </Nav.Link>
          <Nav.Link as={Link} to="/directmessage">
            Direct Messages
          </Nav.Link>
          <Nav.Link as={Link} to="/profile">
            Your Profile
          </Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          {username ? (
            <Navbar.Text>Logged in as: {username}</Navbar.Text>
          ) : (
            <Navbar.Text>You are Logged Out</Navbar.Text>
          )}
          <Button variant="secondary">Logout</Button>
        </Nav>
      </Navbar>
    </>
  );
}
