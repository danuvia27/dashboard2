import React from "react";
import { Card, Container } from "react-bootstrap";

import "./tables.css";
export const Tables = ({ feed, feedol }) => {
  return (
    <Container>
      <Card>
        <Card.Header>Outages</Card.Header>
        <Card.Body>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Title</th>
                <th>Link</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{feed.title}</td>
                <td>{feed.link}</td>
                <td>{feed.updated}</td>
              </tr>

              <tr>
                <td>{feedol.title}</td>
                <td>{feedol.link}</td>
                <td>{feedol.updated}</td>
              </tr>

              <tr>
                <td>Uma</td>
                <td>Pune</td>
                <td>411027</td>
              </tr>
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </Container>
  );
};
