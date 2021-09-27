import React from "react";
import { Card } from "react-bootstrap";
function CardOnList({ title, data }) {
  return (
    <Card className="my-2 text-dark border-0" bg="info">
      <Card.Header as="h6" className="text-white">
        {title}
      </Card.Header>
      <Card.Body className="bg-white">
        {data.map((key, idx) => (
          <p key={idx}>
            {key.name} - {key.value}
          </p>
        ))}
      </Card.Body>
    </Card>
  );
}

export default CardOnList;
