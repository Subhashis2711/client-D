import React from "react";
import { Container } from "react-bootstrap";
import ClientDetail from "./ClientDetail/ClientDetail";

const ClientDetailBox = (props) => {
    const { client } = props;

    return (
        <Container fluid className="client-detail-container p-0">
            <ClientDetail client={client} />
            
        </Container>
    );
};

export default ClientDetailBox;
