import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import About from './Components/About/About'
import Websites from './Components/Websites/Websites'
import Touch from './Components/Get-in-touch/Touch'


const App = () => {
  return (
    <div className='container mx-auto overflow-hidden flex flex-col justify-center' >
      <Navbar  />
     <Hero/>
     <About />
     <Websites />
     <Touch />

     
    </div>
  )
}

export default App