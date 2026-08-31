import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import './Gallery.css'
import usePageMeta from '../hooks/usePageMeta'

const images = [
  '/gallery-1.jpg',
  '/gallery-2.jpg',
  '/gallery-3.jpg',
  '/gallery-4.jpg',
  '/gallery-5.jpg',
  '/gallery-6.jpg',
  '/gallery-7.jpg',
  '/gallery-8.jpg',
  '/gallery-9.jpg',
  '/gallery-10.jpg',
  '/gallery-11.jpg',
  '/gallery-12.jpg',
  '/gallery-13.jpg',
  '/gallery-14.jpg',
  '/gallery-15.jpg',
]

const Gallery = () => {
 usePageMeta('gallery')
  const [selectedImg, setSelectedImg] = useState(null)
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
        <h1 className="mb-2 fw-bold text-center">Gallery</h1>
        <p className="mb-5 text-center" style={{ color: '#aaa' }}>
          A look inside FitZone.
        </p>

        <Row className="g-3" ref={sectionRef}>
          {images.map((img, i) => (
            <Col key={i} md={4} sm={6} xs={6}>
              <div
                className={`gallery-item ${visible ? 'gallery-item-visible' : ''}`}
                style={{ transitionDelay: `${(i % 3) * 0.15 + Math.floor(i / 3) * 0.2}s` }}
                onClick={() => setSelectedImg(img)}
              >
                <img src={img} alt={`Gallery ${i + 1}`} className="gallery-img" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={!!selectedImg} onHide={() => setSelectedImg(null)} centered size="lg">
        <Modal.Body className="p-0">
          {selectedImg && <img src={selectedImg} alt="Enlarged" className="w-100" />}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Gallery