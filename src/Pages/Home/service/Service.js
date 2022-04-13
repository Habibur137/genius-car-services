import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>${price}</Card.Text>
          <button className="btn btn-primary">Buy: {name}</button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
