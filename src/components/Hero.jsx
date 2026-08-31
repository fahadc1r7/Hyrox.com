import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Beams from "./Beams.jsx";
import heroAthlete from "../assets/hero.png";
import "./Hero.css";
import SplitText from "./SplitText.jsx";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
      className="d-flex align-items-center text-white"
    >
      {/* Background layer */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#f1f1f1"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>

      {/* Content layer */}
      <Container
        style={{ position: "relative", zIndex: 1, paddingTop: "110px" }}
      >
        <Row className="hero align-items-center">
          <Col md={6} className="text-center text-md-start">
            <SplitText
              text="Transform Your Body, Transform Your Life"
              tag="h1"
              className="display-3 fw-bold mb-3"
              splitType="words"
              delay={80}
              duration={1}
              ease="power3.out"
              from={{ opacity: 0, y: 40, rotateX: -90 }}
              to={{ opacity: 1, y: 0, rotateX: 0 }}
              textAlign="left"
            />
            <p className="lead mb-4">
              Join Hyrox and get access to world-class trainers, equipment, and
              programs.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <Button
                variant="primary"
                size="lg"
                className="fw-semibold"
                onClick={() => navigate("/contact")}
              >
                Book Free Trial
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                onClick={() => navigate("/programs")}
              >
                View Programs
              </Button>
            </div>
          </Col>

          <Col md={6} className="d-none d-md-flex justify-content-center">
            <img
              src={heroAthlete}
              alt="FitZone athlete"
              className="hero-athlete-img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
