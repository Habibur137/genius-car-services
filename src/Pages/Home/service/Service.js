import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const { name, img, description, price, id } = service;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>${price}</Card.Text>
          <button
            onClick={() => navigate(`/service/${id}`)}
            className="btn btn-primary"
          >
            Buy: {name}
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
