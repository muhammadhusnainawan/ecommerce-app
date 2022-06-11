import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
function Header() {
  return (
    <div>
      <div className="header">
        <Navbar bg="dark" expand="md" variant="dark" collapseOnSelect>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand href="#home">Online Shopping App</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <i class="fa-solid fa-cart-shopping"></i> &nbsp;Cart
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signin">
                  <Nav.Link>
                    <i class="fa-solid fa-cart-shopping"></i>&nbsp;Sign in
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
