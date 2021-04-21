import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

export default function NavBar(props) {
  //temporary username for functionality testing.
  const username = "Megan";
  return (
    <>
      <Navbar sticky="top" bg="primary" variant="dark">
        <Navbar.Brand>KreativeKritique</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/chatroom">Chat Room</Nav.Link>
          <Nav.Link href="/directmessage">Direct Messages</Nav.Link>
          <NavDropdown title="User Information" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <Nav.Link href="/profile">Your Profile</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Nav.Link href="/profile/edit">Edit Your Profile</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Nav.Link href="/profile/allusers">List All Users</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="justify-content-end">
          <Navbar.Text>Logged in as: {username}</Navbar.Text>
          <Button variant="secondary">Logout</Button>
        </Nav>
      </Navbar>
    </>
  );
}
