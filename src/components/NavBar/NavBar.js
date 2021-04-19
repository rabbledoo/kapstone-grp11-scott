import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

export default function NavBar(props) {
  //temporary username for functionality testing.
  const username = "Megan";
  return (
    <>
      <Navbar sticky="top" bg="primary" variant="dark">
        <Navbar.Brand>KreativeKritique</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as="Link" path="/">
            Home
          </Nav.Link>
          <Nav.Link as="Link" path="/chatroom">
            Chat Room
          </Nav.Link>
          <Nav.Link as="Link" path="/directmessage">
            Direct Messages
          </Nav.Link>
          <NavDropdown title="User Information" id="collasible-nav-dropdown">
            <NavDropdown.Item as="Link" path="/profile">
              Your Profile
            </NavDropdown.Item>
            <NavDropdown.Item url="/profile/edit">
              Edit Your Profile
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item url="/userinfo/allusers">
              List All Users
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="justify-content-end">
          <Navbar.Text>Signed in as: {username}</Navbar.Text>{" "}
          <Button variant="outline-secondary">Logout</Button>
        </Nav>
      </Navbar>
    </>
  );
}
