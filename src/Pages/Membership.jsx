import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import "./Membership.css";
import usePageMeta from "../hooks/usePageMeta";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "/mo",
    features: [
      "Gym floor access",
      "Locker room access",
      "2 group classes/week",
      "General diet tips (self-guided)",
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "$49",
    period: "/mo",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "1 personal training session/mo",
      "Custom diet plan (monthly review)",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$79",
    period: "/mo",
    features: [
      "Everything in Standard",
      "4 personal training sessions/mo",
      "Priority booking",
      "Guest passes (2/mo)",
      "Personalized diet plan + weekly check-ins",
    ],
    highlighted: false,
  },
];

const Membership = () => {
  const navigate = useNavigate();

  usePageMeta("membership");
  return (
    <div
      style={{
        paddingTop: "110px",
        minHeight: "100vh",
        backgroundColor: "#0d0d0d",
      }}
      className="text-white pb-5"
    >
      <Container>
        <h1 className="mb-2 fw-bold text-center">Memebership Plans</h1>
        <p className="mb-5 text-center" style={{ colo: "#aaa" }}>
          Choose the plan that fits your fitness journey.
        </p>

        <Row className="g-4 justify-content-center">
          {plans.map((p) => (
            <Col key={p.name} md={4} sm={6}>
              <div
                className={`plan-card ${p.highlighted ? "plan-card-highlighted" : ""}`}
              >
                {p.highlighted && (
                  <div className="plan-badge">Most Popular</div>
                )}
                <h4 className="fw-bold mb-1">{p.name}</h4>
                <div className="plan-price mb-3">
                  {p.price}
                  <span className="plan-period">{p.period}</span>
                </div>
                <ul className="plan-features mb-4">
                  {p.features.map((f) => (
                    <li key={f}>
                      <FaCheck className="me-2" /> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={p.highlighted ? "primary" : "outline-light"}
                  className="w-100 fw-semibold"
                  onClick={() =>
                    navigate("/contact", { state: { selectedPlan: p.name } })
                  }
                >
                  Choose {p.name}
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Membership;
