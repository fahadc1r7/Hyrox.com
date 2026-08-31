import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'
import usePageMeta from '../hooks/usePageMeta'
import './Trainers.css'

const trainers = [
  { name: 'Alex Carter', specialty: 'Strength & Conditioning', bio: '10+ years helping clients build raw power safely.', img: '/trainer-1.jpg' },
  { name: 'Maria Lopez', specialty: 'Yoga & Mobility', bio: 'Certified yoga instructor focused on flexibility and recovery.', img: '/trainer-2.jpg' },
  { name: 'James Okafor', specialty: 'CrossFit Coach', bio: 'Former competitive athlete, now coaching functional fitness.', img: '/trainer-3.jpg' },
  { name: 'Priya Menon', specialty: 'Personal Training', bio: 'Tailored one-on-one programs for every fitness level.', img: '/trainer-4.jpg' },
]

const Trainers = () => {
  usePageMeta('trainers')

  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh', backgroundColor: '#0d0d0d' }} className="text-white pb-5">
      <Container>
        <h1 className="mb-2 fw-bold text-center">Meet Our Trainers</h1>
        <p className="mb-5 text-center" style={{ color: '#aaa' }}>
          Experienced coaches dedicated to your progress.
        </p>

        <Row className="g-4" ref={sectionRef}>
          {trainers.map((t, i) => (
            <Col key={t.name} md={3} sm={6}>
              <div
                className={`trainer-card ${visible ? 'trainer-card-visible' : ''}`}
                style={{ transitionDelay: `${(i % 4) * 0.15}s` }}
              >
                <img src={t.img} alt={t.name} className="trainer-card-img" />
                <div className="trainer-card-body">
                  <h5 className="fw-bold mb-1">{t.name}</h5>
                  <p className="trainer-specialty mb-2">{t.specialty}</p>
                  <p className="trainer-bio mb-3">{t.bio}</p>
                  <div className="trainer-socials">
                    <a href="#" aria-label={`${t.name} Instagram`}><FaInstagram /></a>
                    <a href="#" aria-label={`${t.name} Facebook`}><FaFacebookF /></a>
                    <a href="#" aria-label={`${t.name} Twitter`}><FaTwitter /></a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Trainers