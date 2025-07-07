import React from 'react'
import Carousel from '../components/Carousel'
import MidBanner from '../components/MidBanner' // ✅ fixed casing
import Features from '../Components/Features'

const Home = () => {
  return (
    <>
      <Carousel />
      <MidBanner />
      <Features />
    </>
  )
}

export default Home
