import React from 'react'
import meta from '../../../assets/img/c871d9cf0d06520c6368b7fd3ac703e4.jpg'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import './Home.css'
import Courses from '../Courses/Courses'
import Community from '../Community/Community'
import Plans from '../Plans/Plans'
import MainCourses from '../MainCourses/MainCourses'
function Home() {

  return (
   <>

 <section>
<div className="container">
<div className="home-container">

<div className="home-content">
<h2 className='section_title'>Learn & Grow , Get Online  LIVE Tuition</h2>
<p>Class 1-10 CBSE|State Syllabus, Creating a better future.</p>
<div className="home-btns">
    <button className='register-btn'>Get Started</button>
    <button className='register-btn'>Watch Now</button>
</div>
</div>

<div className="home-img">
<div className="home-img-wrapper">

<div className="box-01">
  <div className="box-img"><img src={meta} alt="" /></div>
</div>

<div className="whatsapp-container">
<h5>50+ students</h5>
<AiOutlineWhatsApp color='green'/>
</div>

<div className="support">
  <h5>Active support</h5>
</div>

</div>
</div>

</div>
</div>
</section>
<MainCourses/>
<Courses/>
<Community/>
<Plans/>
</>
  )
}

export default Home
