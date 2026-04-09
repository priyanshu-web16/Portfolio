import React from 'react'
import Nav from './components/Nav'
import Profile from './components/Profile'
import About from './components/About'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'



const App = () => {
  return (
    <div className='lg:px-15 bg-gray-100'>
   <Nav/>
   
     <Profile/>
   <About/>
   <Skills/>
   <Services/>
   <Projects/>
   <Contact/>
   <Footer/>

    </div>
  )
}

export default App
