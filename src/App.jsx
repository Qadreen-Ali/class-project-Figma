import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/navbar/Navbar'
import Herosection from './Components/herosection/Herosection'
import Hero2 from './Components/hero2/Hero2'
import Hero3 from './Components/hero3/Hero3'
import Hero4 from './Components/hero4/Hero4'
import Hero5 from './Components/hero5/Hero5'
import Hero6 from './Components/hero6/Hero6'
import Footer from './Components/footer/Footer'


function App() {
 

  return (
    <>
   <Navbar></Navbar>
   <Herosection/>
   <Hero2/>
   <Hero3/>
  <Hero4/>
<Hero5/>
<Hero6/>
<Footer/>
    </>
  )
}

export default App
