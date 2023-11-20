import React from 'react'
import Hero from './Components/Hero'
import Main from './Pages/Main'
import Navbar from './Components/Navbar'
import Stats from './Components/Stats'
import PriceSection from './Components/PriceSection'
import Content from './Components/Content'
import News from './Components/News'
import Footer  from './Components/Footer'


function App() {
  return (
    <div>
    {/*   <Hero/> */}
   
      <Hero />
    
      <Content/>
      
      <Stats/>
      <br/>
      <PriceSection/>
      <br/>
      
      <News/>
     
      <Footer/>
      
    </div>
  )
}

export default App
