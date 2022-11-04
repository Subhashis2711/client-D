import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { ClientState } from "../../../context/Context";

const ClientListItem = (props) => {
    const { client, active } = props;
    const { dispatch } = ClientState();

    const selectClientHandler = () => {
        dispatch({
            type: "CLIENT_SELECT",
            payload: client,
        });
    }

    return (
        <Card
            className={`client-list-item-card mb-2 ${active ? "active" : ""}`}
            onClick={selectClientHandler}
        >
            <Card.Body className="p-1">
                <Row className="mb-2">
                    <Col xs={6}>{client.name}</Col>
                    <Col xs={6} className="text-right">
                        {client.type}
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>{`${client.entities.length} Entities`}</Col>
                    <Col
                        xs={6}
                        className="text-right"
                    >{`${client.users} Users`}</Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ClientListItem;
