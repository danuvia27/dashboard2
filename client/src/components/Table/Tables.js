import React from "react";
import { Card, Container } from "react-bootstrap";

import "./tables.css";
export const Tables = ({ feed, feedol, jsonData, azureData }) => {
  return (
    <Container>
      <Card>
        <Card.Header> OneLogin Outages</Card.Header>
        <Card.Body>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Title</th>
                <th>Link</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{feedol.title}</td>
                <td>{feedol.link}</td>
                <td>{feedol.updated}</td>
              </tr>
              <tr>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
              </tr>
              <tr>
                <td>{jsonData.service_name}</td>
                <td>{jsonData.summary}</td>
                <td>{jsonData.date}</td>
              </tr>
            </tbody>
          </table>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header> Unifi Outages</Card.Header>
        <Card.Body>
          <table className="table table-bordered">
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
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
              </tr>
              <tr>
                <td>{azureData.title}</td>
                <td>{azureData.link}</td>
                <td>{azureData.updated}</td>
              </tr>
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </Container>
  );
};
