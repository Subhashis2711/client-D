import React from "react";
import { Container } from "react-bootstrap";
import { ClientState } from "../../../context/Context";
import ClientListItem from "./ClientListItem";

const ClientListItems = (props) => {
    const {
        state: { clients, selected_client },
    } = ClientState();

    return (
        <Container className="client-list-item-container pl-0 pr-0">
            {clients.map((client) => {
                const active =
                    client._id === selected_client._id ? true : false;

                return (
                    <ClientListItem
                        key={client._id}
                        client={client}
                        active={active}
                    />
                );
            })}
        </Container>
    );
};

export default ClientListItems;
