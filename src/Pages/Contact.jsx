import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Contact.css";
import usePageMeta from '../hooks/usePageMeta'

const Contact = () => {
usePageMeta('contact')
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [trialData, setTrialData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    date: "",
  });
  const [contactValidated, setContactValidated] = useState(false);
  const [trialValidated, setTrialValidated] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [trialSubmitted, setTrialSubmitted] = useState(false);
  const handleContactChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleTrialChange = (e) => {
    setTrialData({ ...trialData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setContactValidated(true);
      return;
    }
    setContactValidated(true);
    console.log("Contact form:", contactData);
    setContactSubmitted(true);
    setContactData({ name: "", email: "", message: "" });
    setContactValidated(false);
  };

  const handleTrialSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setTrialValidated(true);
      return;
    }
    setTrialValidated(true);
    console.log("Trial booking:", trialData);
    setTrialSubmitted(true);
    setTrialData({ name: "", email: "", phone: "", program: "", date: "" });
    setTrialValidated(false);
  };

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
        <h1 className="mb-2 fw-bold text-center">Get In Touch</h1>
        <p className="mb-5 text-center" style={{ color: "#aaa" }}>
          Questions, feedback, or ready to start? Reach out.
        </p>

        <Row className="g-4 mb-5">
          <Col md={5}>
            <div className="contact-info-card">
              <div className="contact-info-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h6 className="mb-1">Address</h6>
                  <p className="mb-0 text-muted-custom">
                    Mele Agali, Attapady, Palakkad, KL
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h6 className="mb-1">Phone</h6>
                  <p className="mb-0 text-muted-custom">9999999999</p>
                </div>
              </div>

              <div className="contact-info-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h6 className="mb-1">Email</h6>
                  <p className="mb-0 text-muted-custom">hyrox@gmail.com</p>
                </div>
              </div>

              <iframe
                title="Hyrox Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.1417604034386!2d76.64752087479607!3d11.102810853089165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba88921f499e0eb%3A0xc2bcc0bfbda2adea!2sHYROX%20UNISEX%20GYM%20AGALI%2C%20ATTAPPADY!5e0!3m2!1sen!2sin!4v1787288827790!5m2!1sen!2sin"
                className="contact-map"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>

          <Col md={7}>
            <Form
              noValidate
              validated={contactValidated}
              onSubmit={handleContactSubmit}
              className="contact-form"
            >
              {contactSubmitted && (
                <div className="alert-success-custom mb-3">
                  Message sent! We'll get back to you soon.
                </div>
              )}
              <h4 className="fw-bold mb-3">Send a Message</h4>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={contactData.name}
                  onChange={handleContactChange}
                  required
                  minLength={2}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={contactData.email}
                  onChange={handleContactChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email address.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={contactData.message}
                  onChange={handleContactChange}
                  required
                  minLength={10}
                />
                <Form.Control.Feedback type="invalid">
                  Please write a message (at least 10 characters).
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                type="submit"
                variant="primary"
                className="fw-semibold px-4"
              >
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>

        <div className="trial-booking-section">
          <h4 className="fw-bold mb-1 text-center">Book a Free Trial</h4>
          <p className="text-center mb-4" style={{ color: "#aaa" }}>
            Try Hyrox free - no commitment.
          </p>

          <Form
            noValidate
            validated={trialValidated}
            onSubmit={handleTrialSubmit}
            className="trial-form mx-auto"
          >
            {trialSubmitted && (
              <div className="alert-success-custom mb-3">
                Trial booked! We'll confirm your session shortly.
              </div>
            )}
            <Row className="g-3">
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={contactData.name}
                    onChange={handleContactChange}
                    required
                    minLength={2}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your name.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={contactData.email}
                    onChange={handleContactChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email address.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={trialData.phone}
                    onChange={handleTrialChange}
                    required
                    pattern="[0-9]{10}"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid 10-digit phone number.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Preferred Program</Form.Label>
                  <Form.Select
                    name="program"
                    value={trialData.program}
                    onChange={handleTrialChange}
                    required
                  >
                    <option value="">Select a program</option>
                    <option value="Strength Training">Strength Training</option>
                    <option value="Cardio">Cardio</option>
                    <option value="Yoga">Yoga</option>
                    <option value="CrossFit">CrossFit</option>
                    <option value="Zumba">Zumba</option>
                    <option value="Personal Training">Personal Training</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label>Preferred Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={trialData.date}
                    onChange={handleTrialChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please select a valid future date.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Button
              type="submit"
              variant="primary"
              className="fw-semibold px-4 mt-4 w-100"
            >
              Book Free Trial
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
