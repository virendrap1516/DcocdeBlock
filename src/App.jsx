import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogosDiv from './components/LogoDiv'
import Details from './components/Details'
import DetailsLogo from './components/DetailsLogo'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <LogosDiv/>
      <Details/>
      <DetailsLogo/>
      <Footer/>
    </div>
  )
}

export default App