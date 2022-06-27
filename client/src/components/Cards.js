import React from "react";
import { Card } from "react-bootstrap";
import "./cards.css";

export default function Cards() {
  return (
    <div>
      <Card className="card-widget">
        <Card.Body>
          <h3>AWS</h3>
          <Card.Text>0</Card.Text>
          <Card.Link href="#"></Card.Link>
          <Card.Link href="#"></Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
