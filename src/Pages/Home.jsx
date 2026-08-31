import React from 'react'
import Hero from '../components/Hero.jsx'
import usePageMeta from '../hooks/usePageMeta'
const Home = () => {
usePageMeta('home')
  return (
    <>
      <Hero />
    </>
  )
}

export default Home