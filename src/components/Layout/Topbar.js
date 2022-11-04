import React from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../../assets/images/logo.jpg";


const Topbar = (props) => {
    const { type } = props;

    const customClass = type && type === "mobile" ? "mobile-topbar" : "desktop-topbar";
    return (
        <Navbar
            bg="light"
            expand="lg"
            fixed="top"
            id="top-bar"
            className={`${customClass}`}
        >
            <Container fluid>
                {type === "mobile" && (
                    <Navbar.Brand href="#home">
                        <Image src={Logo} height={45} />
                    </Navbar.Brand>
                )}
                <Nav className="ml-auto">
                    <NavDropdown
                        title={`Hi ${"Subhashis"}`}
                        id="basic-nav-dropdown"
                    >
                        <NavDropdown.Item href="#action/3.1">
                            Account
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Topbar;
