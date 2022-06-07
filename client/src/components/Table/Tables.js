import React from "react";
import * as ReactBootStrap from "react-bootstrap";

import "./tables.css";

export const Tables = ({ feed, feedol }) => {
  return (
    <div className="table">
      <ReactBootStrap.Table striped bordered hover>
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
        </tbody>
      </ReactBootStrap.Table>
      <ReactBootStrap.Table striped bordered hover>
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
        </tbody>
      </ReactBootStrap.Table>
      <ReactBootStrap.Table striped bordered hover>
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
        </tbody>
      </ReactBootStrap.Table>
      <ReactBootStrap.Table striped bordered hover>
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
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
};
