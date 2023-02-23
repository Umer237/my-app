import React, { useState }  from 'react'
import './Header.css'
import {HiBars3} from 'react-icons/hi2'
import {ImCross} from "react-icons/im"
 
const Header = () => {
  const [Mobile, setMobile] = useState(false )
  return (
<>  
<div className='Header-Flex'> 
      <a className="Logo" href='/'>Travellers</a>
<div className='NavBar'>
      <ul className= {Mobile? "nav-links-mobile" : "Links" } onClick={() =>setMobile(false)}>
    <li><a href="/">Reviews</a></li>
    <li><a href='/'>People</a></li>
    <li><a href='/'>Partners</a></li>
    <li><a href='/'>Feedbacks</a></li>
    <li><a href='/'>Pricing</a></li>
    </ul>
   
    <button>Get The App</button>
    </div>
    <button className='Mobile-Menu-icon' onClick={() => setMobile(!Mobile)}>
      {Mobile? <ImCross/> : <HiBars3/> }
      
    </button>
    </div>
</>
  )
}

export default Header