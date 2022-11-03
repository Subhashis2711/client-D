import React from "react";
import { Image, Nav } from "react-bootstrap";
import Logo from "../../assets/images/logo.jpg";
import { IoIosPeople } from "react-icons/io";

const Sidebar = () => {
    return (
        <Nav variant="pills" defaultActiveKey="/" id="side-nav" className="flex-column">
            <Image src={Logo} fluid className="mb-5"/>
            

            <Nav.Item>
                <Nav.Link href="/">
                    <IoIosPeople fontSize="25px"/>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Sidebar;
