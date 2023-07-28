import React from 'react'
import './Footer.css'
import footer from '../../assets/img/ANITHA (5).png'
import { Link } from 'react-router-dom'
function Footer() {
  const handleClick =()=>{
    window.scrollTo(0,0);
  }
  return (

    <footer className='footer'>
<div className="container">
<div className="footer_wrapper">

<div className="footer_box">
<div className="logo">
    <div className="logo_img"><img src={footer} alt=""/></div>    
<h2>Anitha Academy</h2>      
</div>
<p>Embrace the academics with our curriculum and support, we provide online coaching classes for 1st to 12th grade CBSE,state Syllabus.</p>
</div>
<div className="footer_box">
<h4 className='footer-title'>Instituition</h4>
<ul className='footer_links'>
   <li> <Link to ='./courses' onClick={handleClick}> Our programs</Link></li>
   <li> <Link to ='./services' onClick={handleClick}> Our plan</Link></li>
   <li> <a href="">Become a member</a></li>
</ul>
</div>

<div className="footer_box">
<h4 className='footer-title'>Quick Links</h4>
<ul className='footer_links'>
   <li> <Link to='./About Us' onClick={handleClick}> About Us</Link></li>
   <li><Link to='./Contact Us' onClick={handleClick}>Contact Us</Link></li>
   <li> <Link to='./Support Us' onClick={handleClick}>Support Us</Link></li>
</ul>
</div>





</div>
</div>
    </footer>
  )
}

export default Footer
