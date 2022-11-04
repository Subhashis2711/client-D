import React from "react";
import { Container } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";
import { ClientState } from "../../context/Context";
import ClientDetail from "./ClientDetail/ClientDetail";

const ClientDetailBox = (props) => {
    const { state : { clients } } = ClientState();

    let { client } = props;
    let { clientId } = useParams();

    if(clients && !client){
        client = clients.filter(client => (client._id === clientId))[0];
    }

    const isMobile = useMediaQuery({ query: "(max-width: 960px)" });

    const customClass = !isMobile
        ? "client-detail-container"
        : "client-detail-container-mobile";


    return (
        <Container fluid className={`${customClass} p-0`}>
            {client && <ClientDetail client={client} />}
            
        </Container>
    );
};

export default ClientDetailBox;
