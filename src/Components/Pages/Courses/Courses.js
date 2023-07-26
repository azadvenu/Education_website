import React from 'react'
import './Courses.css'
import hh from  '../../../assets/img/3035073-h&h.png'
import rl from '../../../assets/img/istockphoto-1311146017-612x612-rights.jpg'
import sexedu from '../../../assets/img/download-sexedu.png'
import fl from '../../../assets/img/download-fincacial.png'
function Courses() {

 const courseData =[{
 title:"HEALTH & HYGEINE",
 desc: 'Refers to behaviors or habits that promote excellent health and a clean environment.',
 img: hh
 },
 {
    title: 'HUMAN RIGHTS & LAWS',
    desc: 'Designed to promote human rights on social, regional, and domestic levels.',
    img:rl
 },
{
   title:' SEX EDUCATION',
   desc:'Quality teaching and learning about a broad variety of topics related to sex and sexuality.',
   img:sexedu
},
{
  title:'FINANCIAL LITERACY',
  desc:'The possession of knowledge and behaviors that allow an individual to make informed decisions regarding money.',
  img:fl
}]

  return (

    <div className='container course-container'>
      
      <div className="course-top">
        <h2 className='section_title'>Our Free Classes</h2>
        <p>Teaches values and  mold students into more responsible members of society. </p>

        <div className="course-wrapper">

          {
      courseData.map((courses,index)=>(
<div className="course-item" key={index}>
<span className='course-icon'>
<img src={courses.img} alt="" />
</span>
<div className="course-content">
    <h4>{courses.title}</h4>
    <p>{courses.desc}</p>
</div>
</div>
      ))

          }
        
        </div>

      </div>

    </div>

  )
}

export default Courses
