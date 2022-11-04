import React from "react";
import { Col, Row } from "react-bootstrap";

const ClientDetailHeader = (props) => {
    const { client } = props;
    return (
        <div className="pl-2">
            <h3>{client.name}</h3>
            <Row>
                <Col xs={6}>
                    <div>
                        <span><strong>Company Code</strong></span>
                        <p>HC</p>
                    </div>
                    <div>
                        <span><strong>Company Logo</strong></span>
                        <p>{client.logo}</p>
                    </div>
                    
                </Col>
                <Col xs={6}>
                    <div>
                        <span><strong>Domains</strong></span>
                        {client.domains && client.domains.map((domain) => 
                            <p className="m-0">{domain}</p>
                        )}
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default ClientDetailHeader;
