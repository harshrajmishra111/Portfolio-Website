import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                {/* <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span> */}
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> HARSH RAJ MISHRA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                <div style={{ marginTop: 20 }}>
                  <p style={{ fontSize: "1.2em", color: "#bfa2db", marginBottom: 0 }}>
                    Passionate about AI, coding, and building real-world solutions.
                  </p>
                  <p style={{ fontSize: "1.1em", color: "#bfa2db", marginBottom: 40 }}>
                    Always eager to learn, collaborate, and innovate.
                  </p>
                  <blockquote style={{ fontStyle: "italic", color: "#a084ca", borderLeft: "4px solid #bfa2db", paddingLeft: 16, marginBottom: 32 }}>
                    "The only way to do great work is to love what you do."<br />
                    <span style={{ fontSize: "0.95em", color: "#bfa2db" }}>– Steve Jobs</span>
                  </blockquote>
                </div>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
