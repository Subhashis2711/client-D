import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import ClientEntities from "./Entities/ClientEntities";

const ClientDetailBody = () => {
    return (
        <Tabs
            defaultActiveKey="entities"
            transition={false}
            id="noanim-tab-example"
        >
            <Tab eventKey="entities" title="ENTITIES">
                <ClientEntities />
            </Tab>
            <Tab eventKey="profile" title="INVOICE CODES" disabled>
            </Tab>
            <Tab eventKey="contact" title="USERS" disabled>
            </Tab>
        </Tabs>
    );
};

export default ClientDetailBody;
