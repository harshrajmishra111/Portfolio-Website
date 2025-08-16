import React from "react";
import { FaPython } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { FaDatabase } from "react-icons/fa6";
import { BiLogoFlutter } from "react-icons/bi";
import { SiGooglecloud } from "react-icons/si";
import { SiFlask } from "react-icons/si";


import {

  DiGit,

} from "react-icons/di";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span>ML</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span>AI</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span>DS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoFlutter />
      </Col>
            <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
    </Row>
  );
}

export default Techstack;
