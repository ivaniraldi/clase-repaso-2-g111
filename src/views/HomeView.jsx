import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Destacados from '../components/Destacados'
import Footer from '../components/Footer'

export default function HomeView() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Destacados/>
      <Footer/>
    </>
  )
}
