import React from 'react'
import logo from '../../assets/img/anitha.jpg'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {

  const nav_titles =[
    { path:'/', display:'Home'},
    { path:'/Courses',display:'Courses'},
    { path:'/Services', display:'Services'},
    {path:'/About Us', display:'About Us'}
  ]


  return (
    <div>
        <header className='header'>

 <div className='container'>
 <div className="nav_container">

<div className="logo">
  <div className="logo-img">
   <img src= {logo} alt="" />
  </div>
  <h2>Anitha Academy</h2>
</div>

<div className="navigation">
  <ul className='menu'>
    {
      nav_titles.map((item)=>(
        <li className='nav_item'> <Link  to={item.path} > {item.display}</Link></li>
      ))
    }
  </ul>
</div>


 </div>  
 </div>
        </header>
      
    </div>
  )
}

export default Header
