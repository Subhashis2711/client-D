import React from "react";
import { Accordion, Container } from "react-bootstrap";
import ClientListItems from "./ClientListItems";

const ClientList = () => {
    
    return (
        <Container className="mt-0 client-list-accordion-container">
            <Accordion defaultActiveKey="0" flush className="client-list-accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>October 2022</Accordion.Header>
                    <Accordion.Body className="p-1">
                        <ClientListItems />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default ClientList;
