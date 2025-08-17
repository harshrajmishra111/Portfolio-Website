import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import homeLogo from "../../Assets/home-main.svg";

import img1 from "../../Assets/Images/hack 5th-225.jpg";
import img2 from "../../Assets/Images/photo-output 1.JPEG";
import img3 from "../../Assets/Images/photo-output.jpeg";
import img4 from "../../Assets/Images/IMG_5772.jpeg";
import img5 from "../../Assets/Images/photo-output 2.jpeg";
import img6 from "../../Assets/Images/IMG_5770.jpeg";
import img7 from "../../Assets/Images/IMG_2184.jpeg";
import img8 from "../../Assets/Images/e30a8487-bf6c-4b8c-b9bd-ed23a038eacf.jpeg";
import img9 from "../../Assets/Images/IMG_5771.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => setCurrent((p) => (p + 1) % images.length);
  const prevSlide = () => setCurrent((p) => (p - 1 + images.length) % images.length);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 8000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Keyboard left/right
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Pointer (mouse + touch) swipe
  const ptrId = useRef(null);
  const startX = useRef(0);
  const captured = useRef(false);

  const onPointerDown = (e) => {
    ptrId.current = e.pointerId;
    startX.current = e.clientX;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    captured.current = true;
  };
  const onPointerMove = (e) => {
    if (ptrId.current == null) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 55) {
      dx > 0 ? prevSlide() : nextSlide();
      if (captured.current) {
        e.currentTarget.releasePointerCapture?.(ptrId.current);
      }
      ptrId.current = null;
      captured.current = false;
    }
  };
  const onPointerEnd = (e) => {
    if (ptrId.current != null && captured.current) {
      e.currentTarget.releasePointerCapture?.(ptrId.current);
    }
    ptrId.current = null;
    captured.current = false;
  };

  const styles = {
    shell: {
      position: "relative",
      zIndex: 10,
      width: "clamp(800px, 65vw, 1100px)",
      margin: "0 auto",
      isolation: "isolate",
      pointerEvents: "auto",
    },
    frame: {
      border: "4px solid #a084ca",
      borderRadius: 20,
      padding: 12,
      background: "rgba(124,77,255,0.08)",
      boxShadow: "0 12px 36px rgba(124,77,255,0.24)",
      overflow: "hidden",
    },
    stage: {
      width: "100%",
      aspectRatio: "16 / 10",
      background: "rgba(8, 6, 18, 0.78)",
      borderRadius: 14,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      touchAction: "pan-y",
    },
    img: {
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain",
      borderRadius: 10,
      background: "#0a0a14",
      boxShadow: "0 4px 18px rgba(0,0,0,0.25)",
      userSelect: "none",
      pointerEvents: "none",
    },
  };

  return (
    <div style={styles.shell} aria-label="Project image carousel">
      <div style={styles.frame}>
        <div
          style={styles.stage}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerEnd}
          onPointerCancel={onPointerEnd}
          onPointerLeave={onPointerEnd}
        >
          <img src={images[current]} alt={`slide-${current}`} style={styles.img} />
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <section>
      {/* Main hero section with Ghibli art */}
      <Container fluid className="home-section" id="home" style={{ position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <Particle />
        </div>

        <Container className="home-content" style={{ position: "relative", zIndex: 1 }}>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">Hi There!</h1>
              <h1 className="heading-name">
                I'M <strong className="main-name"> HARSH RAJ MISHRA</strong>
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
                  <blockquote
                    style={{
                      fontStyle: "italic",
                      color: "#a084ca",
                      borderLeft: "4px solid #bfa2db",
                      paddingLeft: 16,
                      marginBottom: 32,
                    }}
                  >
                    "The only way to do great work is to love what you do."
                    <br />
                    <span style={{ fontSize: "0.95em", color: "#bfa2db" }}>– Steve Jobs</span>
                  </blockquote>
                </div>
              </div>
            </Col>
            <Col
              md={5}
              className="d-flex align-items-center justify-content-center"
              style={{ paddingBottom: 20 }}
            >
              <img
                src={homeLogo}
                alt="home art"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Gallery section */}
      <Container fluid className="gallery-section" style={{ marginTop: 60, marginBottom: 60 }}>
        <h2 style={{ textAlign: "center", color: "#c770f0", marginBottom: 30, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", fontSize: "2.6em" }}>
          Gallery
        </h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ImageCarousel />
        </div>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;