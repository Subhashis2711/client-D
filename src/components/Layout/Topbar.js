import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Topbar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" id="top-bar">
      <Container fluid>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Nav className="ml-auto">
            <NavDropdown title={`Hi ${"Subhashis"}`} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                
            </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Topbar;
