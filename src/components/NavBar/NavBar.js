import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStore } from "../../store/store";

export default function NavBar(props) {
  const user = useStore((state) => state.user);

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
          <Nav.Link as={Link} to="/userlist">
            User List
          </Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          {user.displayName ? (
            <Nav.Link as={Link} to="/profile">
              Hello, {user.displayName}!
            </Nav.Link>
          ) : (
            "   "
          )}{" "}
          <Button variant="secondary">Logout</Button>
        </Nav>
      </Navbar>
    </>
  );
}
