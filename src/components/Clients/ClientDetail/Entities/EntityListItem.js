import React from "react";
import { Accordion, Col, Row } from "react-bootstrap";

const EntityListItem = (props) => {
    const { entity } = props;
    return (
        <Accordion defaultActiveKey="0" flush className="entity-accordion">
            <Accordion.Item eventKey="0">
                <Accordion.Header className="p-0">
                    <Row>
                        <Col xs={3}>Riyad, Kingdom of SA</Col>
                        <Col xs={2}>{entity.name}</Col>
                        <Col xs={2}>LUC</Col>
                        <Col xs={3}>3-June,2022-5-June, 2022</Col>
                        <Col xs={2}>External</Col>
                    </Row>
                </Accordion.Header>
                <Accordion.Body className="p-1"></Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default EntityListItem;
