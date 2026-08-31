import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import CardNav from './components/CardNav.jsx'
import Footer from './components/Footer.jsx'
import ScrollToFooter from './components/ScrollToFooter.jsx'
import PageTransition from './components/PageTransition.jsx'
import Home from './Pages/Home.jsx'
import Programs from './Pages/Programs.jsx'
import Trainers from './Pages/Trainers.jsx'
import Membership from './Pages/Membership.jsx'
import Gallery from './Pages/Gallery.jsx'
import Testimonials from './Pages/Testimonials.jsx'
import Contact from './Pages/Contact.jsx'
import PolicyRules from './Pages/PolicyRules.jsx'
import NotFound from './Pages/NotFound.jsx'
import cardPrograms from './assets/card-programs.jpg'
import cardTrainers from './assets/card-trainers.jpg'
import cardGallery from './assets/card-gallery.jpg'


const items = [
  {
    label: 'Explore',
    bgColor: '#0d0d0d',
    textColor: '#fff',
    bgImage: cardPrograms,
    links: [
      { label: 'Home', href: '/', ariaLabel: 'Home' },
      { label: 'Programs', href: '/programs', ariaLabel: 'Programs' }
    ]
  },
  {
    label: 'Community',
    bgColor: '#0d0d0d',
    textColor: '#fff',
    bgImage: cardTrainers,
    links: [
      { label: 'Trainers', href: '/trainers', ariaLabel: 'Trainers' },
      { label: 'Membership', href: '/membership', ariaLabel: 'Membership' }
    ]
  },
  {
    label: 'Visit',
    bgColor: '#0d0d0d',
    textColor: '#fff',
    bgImage: cardGallery,
    links: [
      { label: 'Gallery', href: '/gallery', ariaLabel: 'Gallery' },
      { label: 'Testimonials', href: '/testimonials', ariaLabel: 'Testimonials' },
      { label: 'Contact', href: '/contact', ariaLabel: 'Contact' }
    ]
  }
]

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/programs" element={<PageTransition><Programs /></PageTransition>} />
        <Route path="/trainers" element={<PageTransition><Trainers /></PageTransition>} />
        <Route path="/membership" element={<PageTransition><Membership /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/policy" element={<PageTransition><PolicyRules /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <CardNav
        items={items}
        baseColor="#ffffff"
        menuColor="#0d0d0d"
        buttonBgColor="#0c0c0c"
        buttonTextColor="#ffffff"
      />
      <AnimatedRoutes />
      <Footer />
      <ScrollToFooter />
    </BrowserRouter>
  )
}

export default App