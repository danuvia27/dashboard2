import React from "react";
import { Card, Container } from "react-bootstrap";
import { BsArrowClockwise } from "react-icons/bs";
import Cards from "./Cards";

import "./tables.css";
export const Tables = ({ feed, feedol, jsonData, azureData, refresh }) => {
  return (
    <Container>
      <Cards />
      <Card className="table-card">
        <Card.Header>
          {" "}
          <button type="button" className=" refresh-button" onClick={refresh}>
            {" "}
            <BsArrowClockwise />
          </button>{" "}
          OneLogin Outages{" "}
        </Card.Header>
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
      <Cards />
      <Card className="table-card">
        <Card.Header> Unifi Outages </Card.Header>
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
