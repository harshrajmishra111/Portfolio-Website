import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { FaKaggle } from "react-icons/fa6";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a coder with expertise in Python, machine learning, deep
              learning, and artificial intelligence. I thrive on solving complex problems
              <br />
              <br />I am proficient in established technologies such as
              <i>
                <b className="purple"> Python, ML and Data Science </b>
              </i>
              <br />
              <br />
              I’m driven to creating impactful &nbsp;
              <i>
                <b className="purple">Real-world Projects and Products </b>
                while continuously exploring new horizons in{" "}
                <b className="purple">
                  Artificial Intelligence.
                </b>
              </i>
              <br />
              <br />
              If you can’t find me coding, you’ll probably catch me explaining AI to my friends
              <b className="purple"> (who didn’t ask) </b> using
              <i>
                <b className="purple">
                  {" "}
                    pizza toppings as analogies.
                </b>
              </i>
              <br />
              <br />
              And yes, I occasionally talk to my code.
              <b className="purple"> Sometimes it even </b> talks back
              <i>
                <b className="purple">
                  {" "}
                    (usually in the form of errors).
                </b>
              </i>

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/harshrajmishra111"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.kaggle.com/harshrajmishra111"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaKaggle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/harsh-raj-mishra-872132289/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/x_evil_weevil/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
