import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import './ScrollToFooter.css'

const ScrollToFooter = () => {
  const handleClick = () => {
    const footer = document.getElementById('site-footer')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button
      className="scroll-to-footer-btn"
      onClick={handleClick}
      aria-label="Scroll to footer"
    >
      <FaArrowDown />
    </button>
  )
}

export default ScrollToFooter