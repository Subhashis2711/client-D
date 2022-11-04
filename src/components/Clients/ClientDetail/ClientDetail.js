import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import ClientDetailBody from "./ClientDetailBody";
import ClientDetailHeader from "./ClientDetailHeader";

const ClientDetail = (props) => {
    const { client } = props;
    
    return (
        <div className="pt-3 pl-1 pr-1 bg-white m-0">
            <Row>
                <Col xs={8}>
                    <ClientDetailHeader client={client} />
                </Col>
                <Col xs={4} className="text-right">
                    <div className="pr-2">
                        <Button variant="info">Edit</Button>
                    </div>
                </Col>
            </Row>
            <ClientDetailBody client={client}/>
        </div>
    );
};

export default ClientDetail;
