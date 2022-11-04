import React from "react";
import { Container } from "react-bootstrap";
import ClientList from "./ClientList/ClientList";
import { useMediaQuery } from "react-responsive";

const ClientListbar = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 960px)" });

    const customClass = !isMobile
        ? "client-list-container"
        : "client-list-container-mobile";
    return (
        <Container className={customClass}>
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
