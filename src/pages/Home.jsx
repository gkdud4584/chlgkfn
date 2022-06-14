import React from 'react'
import '../App.css';
import HeroSection from '../components/heroSection/HeroSection.js';
import Cards from '../components/card/Card';
const home = () => {
  return (
    <>
        <HeroSection />
        <Cards />
    </>
  )
}

export default home