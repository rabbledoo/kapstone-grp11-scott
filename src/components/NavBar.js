import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

function NavBar(props) {
  return (
    <>
      <Navbar sticky="top" bg="primary" variant="dark">
        <Navbar.Brand>KreativeKritique</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link url="/">Home</Nav.Link>
          <Nav.Link url="/chatroom">Chat Room</Nav.Link>
          <Nav.Link url="/directmessages">Direct Messages</Nav.Link>
          <NavDropdown title="User Information" id="collasible-nav-dropdown">
            <NavDropdown.Item url="/userinfo/user/display">
              Your Profile
            </NavDropdown.Item>
            <NavDropdown.Item url="/userinfo/user/edit">
              Edit Your Profile
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item url="/userinfo/allusers">
              List All Users
            </NavDropdown.Item>
          </NavDropdown>
          <Button variant="outline-secondary">Logout</Button>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavBar;
