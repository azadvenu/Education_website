import React from 'react'
import './MainCourses.css'
import ss from '../../../assets/img/science.png'
import math from '../../../assets/img/maths.png'
import social from '../../../assets/img/social3.jpg'
import lang from '../../../assets/img/language.png'
function MainCourses() {
    const subjectData =[{
        title:"SCIENCE",
        desc: 'Covers PHYSICS, CHEMISTRY & BIOLOGY.',
        img: ss
        },
        {
           title: 'MATHEMATICS',
           desc: 'Syllabus Oriented with extra ABACUS & Aptitude.',
           img:math
        },
       {
          title:'SOCIAL',
          desc:'HISTORY,GEOGRAPHY & International POLITICS.',
          img: social
       },
       {
         title:'LANGUAGES',
         desc:'Multiple languages such as Malayalam, English & Hindi.',
         img:lang
       }]
       
  return (

    <div className='container course-container1' >
        
        <div className="course-top1">
               <h2>Our Subjects</h2>
               <p>Covers Overall syllabus with exam oreinted assessment support.</p>

               <div className="course-wrapper1">
                {
                  subjectData.map((subjects,index)=>(
                    <div className="course-item1"  key={index}>
                     <span className='course1-icon'>
                        <img src={subjects.img} alt="" />
                     </span>
                     <div className="course-content1">
                        <h4>{subjects.title}</h4>
                        <p>{subjects.desc}</p>
                    </div>
                    </div>
                  ))
                }
               </div>

        </div>

    </div>
  )
}

export default MainCourses
