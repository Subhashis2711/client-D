import React from "react";
import { Container } from "react-bootstrap";
import ClientList from "./ClientList/ClientList";

const ClientListbar = () => {
    return (
        <Container className="client-list-container">
            <div className="d-flex justify-content-between pt-3 pl-1 pr-1 bg-white m-0">
                <div className="d-flex justify-content-start">
                    <h3>Clients</h3>
                    <p>Creation time</p>
                </div>
                <div>Add</div>
            </div>
            <ClientList />
        </Container>
    );
};

export default ClientListbar;
