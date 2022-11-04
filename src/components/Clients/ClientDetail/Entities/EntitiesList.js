import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import EntityListItems from "./EntityListItems";

const EntitiesList = (props) => {
    const { entities } = props;

    return (
        <Container>
            <Row>
                <Col xs={3}>Biling Location</Col>
                <Col xs={2}>Entity Name</Col>
                <Col xs={2}>Entity Code</Col>
                <Col xs={3}>MSLA Valid Through</Col>
                <Col xs={2}>File Sharing</Col>
            </Row>
            <EntityListItems entities={entities} />
        </Container>
    );
};

export default EntitiesList;
