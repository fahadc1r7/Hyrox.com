import React from 'react'
import { Container } from 'react-bootstrap'
import './PolicyRules.css'
import usePageMeta from '../hooks/usePageMeta'
const PolicyRules = () => {
  usePageMeta('policy')
  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh', backgroundColor: '#0d0d0d' }} className="text-white pb-5">
      <Container>
        <h1 className="mb-2 fw-bold text-center">Gym Rules &amp; Privacy Policy</h1>
        <p className="mb-5 text-center policy-updated">Last updated: August 2026</p>

        <div className="policy-section">
          <h3 className="fw-bold mb-3">About FitZone</h3>
          <p>
            FitZone is a fitness facility offering strength training, cardio, group classes, and
            personal training. This page outlines the rules members and visitors agree to follow
            while using our facility, along with how we handle your personal data.
          </p>
        </div>

        <div className="policy-section">
          <h3 className="fw-bold mb-3">Gym Rules</h3>
          <ul className="policy-list">
            <li>Members must check in at reception before using the gym floor.</li>
            <li>Re-rack weights and wipe down equipment after use.</li>
            <li>Appropriate athletic attire and closed-toe shoes are required at all times.</li>
            <li>Personal training sessions require advance booking; walk-ins are not guaranteed a slot.</li>
            <li>Guests must be signed in by a member and are limited per membership tier.</li>
            <li>FitZone is not liable for lost or stolen personal belongings.</li>
            <li>Disruptive, abusive, or unsafe behavior may result in membership suspension.</li>
            <li>Minors under 16 must be accompanied by a guardian at all times.</li>
          </ul>
        </div>

        <div className="policy-section">
          <h3 className="fw-bold mb-3">Membership &amp; Cancellation</h3>
          <ul className="policy-list">
            <li>Memberships renew automatically unless cancelled at least 7 days before the renewal date.</li>
            <li>Refunds are not provided for partial months or unused sessions.</li>
            <li>Membership freezes (medical or travel) may be requested through reception.</li>
          </ul>
        </div>

        <div className="policy-section">
          <h3 className="fw-bold mb-3">Privacy Policy</h3>
          <p>
            We collect the information you provide through our contact and trial-booking forms
            (name, email, phone, and preferred program/date) solely to respond to your inquiry
            or confirm your session. We do not sell or share your information with third parties
            for marketing purposes.
          </p>
          <p>
            Data submitted through our forms is stored securely and retained only as long as
            needed to fulfill the purpose it was collected for. You may request that we delete
            your information at any time by contacting us directly.
          </p>
          <p>
            This site does not use tracking cookies for advertising. Basic technical cookies may
            be used to ensure the site functions correctly.
          </p>
        </div>

        <div className="policy-section">
          <h3 className="fw-bold mb-3">Contact Us</h3>
          <p>
            Questions about these rules or our privacy practices can be sent through our{' '}
            <a href="/contact" className="policy-link">Contact page</a>.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default PolicyRules