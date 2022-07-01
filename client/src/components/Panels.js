import React from "react";
import { Collapse } from "antd";
import { Card, Container } from "react-bootstrap";
import { BsArrowClockwise } from "react-icons/bs";
import "./panels.css";
import "antd/dist/antd.css";

const { Panel } = Collapse;

export const Panels = ({ feed, feedol, jsonData, azureData, getAllFour }) => {
  return (
    <Container>
      <Card className="table-card">
        <Card.Header>
          {" "}
          <button
            type="button"
            className=" refresh-button"
            onClick={getAllFour}
          >
            {" "}
            <BsArrowClockwise />
          </button>{" "}
          Upstream Outages{" "}
        </Card.Header>
        <Collapse accordion>
          <Panel header={feedol.title} key="1">
            <p>{}</p>
          </Panel>
          <Panel header={feed.title} key="2">
            <p>{}</p>
          </Panel>
          <Panel header={azureData.title} key="3">
            <p>{}</p>
          </Panel>
          <Panel header={jsonData.service_name} key="4">
            <p>{}</p>
          </Panel>
        </Collapse>
      </Card>
    </Container>
  );
};
