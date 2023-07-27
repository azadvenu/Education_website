import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from '../Components/Pages/Home/Home'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Plans from '../Components/Pages/Plans/Plans'
import Courses from '../Components/Pages/Courses/Courses'
import AboutUs from '../Components/Pages/AboutUs/AboutUs'
import ContactUs from '../Components/Pages/ContactUs/ContactUs'
import SupportUs from '../Components/Pages/Support/Support'
function LayoutRoutes() {
  return (
   
      <Router>
    <Header/>
    <Routes>
    <Route path='' element={<Home/>}/>
    <Route path='/Education_website' element={<Home/>}/>
    <Route path='/services' element={<Plans/>}/>
    <Route path='/courses' element={<Courses/>}/>
    <Route path='/About Us' element ={<AboutUs/>}/>
    <Route path='/Contact Us' element ={<ContactUs/>}/>
    <Route path='/Support Us' element ={<SupportUs/>}/>
    </Routes> 
    <Footer/>   
      </Router>
    
  )
}

export default LayoutRoutes
