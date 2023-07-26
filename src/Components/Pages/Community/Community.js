import React from 'react'
import './Community.css'
import tc from '../../../assets/img/tc.png'
function Community() {
    const handleClick = ()=>{
        window.open('_blank')
    }
  return (
    <div className='container'>
        <div className="start-wrapper">

            <div className="start-img">
             <img src={tc} alt="" />
            </div>
            <div className="start-content">
                <h2 className='section-title'>Join Our Free Tuition Community.</h2>
                <p>Offer flexibility in timing, location, and pace of learning. Individualised attention to each student. This means that students can learn at their own pace and convenience without worrying about missing out on any crucial topics. </p>
                <button className="register-btn" onClick={handleClick}>Join Now</button>
            </div>

        </div>
      
    </div>
  )
}

export default Community
