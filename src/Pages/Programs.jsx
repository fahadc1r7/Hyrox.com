import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import usePageMeta from '../hooks/usePageMeta'
import './Programs.css'

const programs = [
  { name: 'Strength Training', desc: 'Build raw power with free weights and machines.', img: '/program-strength.jpg' },
  { name: 'Cardio', desc: 'Boost endurance and burn fat with high-energy sessions.', img: '/program-cardio.jpg' },
  { name: 'Yoga', desc: 'Improve flexibility, balance, and mental focus.', img: '/program-yoga.jpg' },
  { name: 'CrossFit', desc: 'High-intensity functional training for total fitness.', img: '/program-crossfit.jpg' },
  { name: 'Zumba', desc: 'Dance your way to fitness with high-energy routines.', img: '/program-zumba.jpg' },
  { name: 'Personal Training', desc: 'One-on-one coaching tailored to your goals.', img: '/program-personal.jpg' },
]

const Programs = () => {
  usePageMeta('programs')

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
        <h1 className="mb-2 fw-bold text-center">Our Programs</h1>
        <p className="mb-5 text-center" style={{ color: '#aaa' }}>
          Find your training that fits for your goals.
        </p>

        <Row className="g-4" ref={sectionRef}>
          {programs.map((p, i) => (
            <Col key={p.name} md={4} sm={6}>
              <div
                className={`program-card ${visible ? 'program-card-visible' : ''}`}
                style={{ transitionDelay: `${(i % 3) * 0.15 + Math.floor(i / 3) * 0.2}s` }}
              >
                <img src={p.img} alt={p.name} className="program-card-img" />
                <div className="program-card-overlay">
                  <h5 className="fw-bold mb-1">{p.name}</h5>
                  <p className="mb-0 small">{p.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Programs