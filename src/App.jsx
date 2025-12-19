
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Websites from './Components/Websites/Websites'
import Touch from './Components/Get-in-touch/Touch'


const App = () => {
  return (
    <div className='' >
      <Navbar  />
     <Hero/>
     <About />
     <Services />
     <Websites />
     <Touch />

     
    </div>
  )
}

export default App