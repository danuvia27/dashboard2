import React from "react";
import { Collapse } from "antd";
import { Card, Container } from "react-bootstrap";
import { BsArrowClockwise } from "react-icons/bs";
import "./panels.css";
import "antd/dist/antd.min.css";

const { Panel } = Collapse;

export const Panels = ({
  feed,
  feedol,
  jsonData,
  azureData,
  getAllFour,
  feedolIsActive,
  feedIsActive,
  jsonIsActive,
  azureIsActive,
  jsonShouldDisplayActive,
}) => {
  return (
    <Container>
      <Card className="table-card">
        <Card.Header>Upstream Outages </Card.Header>
        <Collapse accordion>
          <Panel
            className={feedolIsActive ? "makeItRed" : "makeItGreen"}
            header={feedol.map((item) => (
              <p>{item.title}</p>
            ))}
            key="1"
          >
            {feedol.map((item) => (
              <div>
                <p>{item.link}</p>
                <p>{item.updated}</p>
              </div>
            ))}
          </Panel>
          <p>{}</p>
          <Panel
            className={feedIsActive ? "makeItRed" : "makeItGreen"}
            header={feed.map((item) => (
              <p>{item.title}</p>
            ))}
            key="2"
          >
            {feed.map((item) => (
              <div>
                <p>{item.link}</p>
                <p>{item.updated}</p>
              </div>
            ))}
          </Panel>
          <p>{}</p>
          <Panel
            className={azureIsActive ? "makeItRed" : "makeItGreen"}
            header={azureData.map((item) => (
              <p>{item.title}</p>
            ))}
            key="3"
          >
            {azureData.map((item) => (
              <div>
                <p>{item.link}</p>
                <p>{item.updated}</p>
              </div>
            ))}
          </Panel>
          <p>{}</p>
          <Panel
            className={jsonIsActive ? "makeItRed" : "makeItGreen"}
            header="AWS Status"
            key="4"
          >
            {jsonData.archive.map((item) => (
              <div>
                <p
                  className={
                    jsonShouldDisplayActive(item.date)
                      ? "theRedClassname"
                      : "theGreenClassname"
                  }
                >
                  {item.service_name}
                </p>
                <p>{item.summary}</p>
              </div>
            ))}
          </Panel>
          <p>{}</p>
        </Collapse>
      </Card>
    </Container>
  );
};
