import React from "react";
import { Container } from "react-bootstrap";
import { ClientState } from "../../../../context/Context";
import EntitiesList from "./EntitiesList";

const ClientEntities = () => {
    const {
        state: { selected_client: client },
    } = ClientState();
    return (
        <Container className="client-entities-container">
            <div className="mb-1"><strong>{`${client.entities.length} Entities`}</strong></div>
            <div>
                <EntitiesList entities={client.entities} />
            </div>
        </Container>
    );
};

export default ClientEntities;
