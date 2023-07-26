import React from 'react'
import './AboutUs.css'
import azad from '../../../assets/img/AZADVENU (3).jpg'
function AboutUs() {
  return (
    <div className='Container'>
      <div className="about-us-container">

        <div className="team-members">
            <h2>Our Team</h2>
            <div className="member-card">
               <img className='member-image' src={azad} alt="" />
               <h3 className='member-name'>Azad</h3>
               <p className='member-role'>Co-Founder</p>
            </div>
        </div>

        <div className="about-us-description">
            <h1 className='about-us-heading'>About Us</h1>
            <p>
            Anitha Academy  online tuition helps students in getting familiarity about the perceptions that are imparted to them in schools. We believe that motivation is important for success, and thus all our tutors motivate students so they can stay on track and can fulfil their goals in life. No matter how old your children are, they still can get customized and tailored classes. Our unique strategies, customized online tuition classes, lowest tuition free, free demo classes, regular doubt sessions, are something which help us set benchmarks in the entire online education world.
            </p>
        </div>

        </div>
    </div>
  )
}

export default AboutUs
