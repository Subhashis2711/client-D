import React from "react";
import { Container } from "react-bootstrap";
import EntityListItem from "./EntityListItem";

const EntityListItems = (props) => {
    const { entities } = props;

    return (
        <Container className="entities-container pl-0 pr-0">
            {entities.map((entity) => (
                <EntityListItem key={entity.id} entity={entity} />
            ))}
        </Container>
    );
};

export default EntityListItems;
