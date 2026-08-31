import React from 'react'
import { Container } from 'react-bootstrap'
import usePageMeta from '../hooks/usePageMeta'
const NotFound = () => {
  usePageMeta('notFound')

  return (
    <div style={{ paddingTop: '110px', minHeight: '100vh', backgroundColor: '#0d0d0d' }} className="text-white d-flex align-items-center">
      <Container className="text-center">
        <h1 className="display-1 fw-bold" style={{ color: 'var(--gym-blue, #1e5fff)' }}>404</h1>
        <h3 className="mb-3">Page Not Found</h3>
        <p className="mb-4" style={{ color: '#aaa' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="btn btn-primary fw-semibold px-4">Back to Home</a>
      </Container>
    </div>
  )
}

export default NotFound