import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone, I am <span className="purple">Harsh Raj Mishra </span>
            from <span className="purple"> India.</span>
            <br />
            I’m currently pursuing my B.Tech in AIML, with hands-on experience in ML, DL, NLP, and real-world AI projects.
            <br />
            <br />

            Beyond coding, I’m passionate about sports, hitting the gym, exploring music, and traveling — things that keep me curious, energized, and inspired.   
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            Here’s a bit more about me{" "}
          </p>

          <ul className="about-activity-list">
            <li className="about-activity">
              ♟️ I'm a regional-level chess player
            </li>
            <li className="about-activity">
              🪘 I completed a 5-Year Senior Diploma in Classical Instrument (Tabla).
            </li>
            <li className="about-activity">
              🇩🇪 Keen on learning languages — recently completed 1 year of learning German
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nothing is impossible!"{" "}
          </p>
          <footer className="blockquote-footer">HRM</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
