import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiGooglecolab } from "react-icons/si";
import { SiKaggle } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { FaBitbucket } from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";
import {
  SiVisualstudiocode,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKaggle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBitbucket />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span>LangSmith</span>
      </Col>
      
    </Row>
  );
}

export default Toolstack;
