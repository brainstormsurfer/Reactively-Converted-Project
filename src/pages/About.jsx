import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import Info from '../components/Info/Info'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Logos from '../components/Logos/Logos'
import Testimonials from '../components/Testimonials/Testimonials'

const About = () => {
  return (
    <>
        <Header />
        <Info />
        <ProgressBar />
        <Logos />
        <Testimonials />
        <Footer />
    </>
  )
}

export default About