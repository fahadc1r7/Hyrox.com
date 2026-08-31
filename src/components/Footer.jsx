import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { GiBiceps } from 'react-icons/gi'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="site-footer" id='site-footer'>
      <Container>
        <Row className="g-4">
          <Col md={4}>
            <div className="d-flex align-items-center gap-2 mb-3">
              <GiBiceps size={24} color="var(--gym-blue, #1e5fff)" />
              <span className="footer-brand">FitZone</span>
            </div>
            <p className="footer-text">
              Real training, real results. Strength, cardio, and community under one roof.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
            </div>
          </Col>

          <Col md={2}>
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/programs">Programs</a></li>
              <li><a href="/trainers">Trainers</a></li>
              <li><a href="/membership">Membership</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/policy">Rules &amp; Privacy</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h6 className="footer-heading">Opening Hours</h6>
            <ul className="footer-hours">
              <li><span>Mon – Fri</span><span>6:00 AM – 10:00 PM</span></li>
              <li><span>Saturday</span><span>7:00 AM – 8:00 PM</span></li>
              <li><span>Sunday</span><span>8:00 AM – 6:00 PM</span></li>
            </ul>
          </Col>

          <Col md={3}>
            <h6 className="footer-heading">Stay Updated</h6>
            <p className="footer-text">Get tips, offers, and gym news in your inbox.</p>
            <Form className="footer-newsletter">
              <Form.Control type="email" placeholder="Your email" required />
              <Button type="submit" variant="primary">Subscribe</Button>
            </Form>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p className="mb-0">© {new Date().getFullYear()} FitZone. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer