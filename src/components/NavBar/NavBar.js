import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStore } from "../../store/store";

export default function NavBar(props) {
  const user = useStore((state) => state.user);
  const handleLogout = () => {
    user = {};
  };
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
          <Nav.Link as={Link} to="/profileview">
            Your Profile
          </Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Button variant="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </Nav>
      </Navbar>
    </>
  );
}
