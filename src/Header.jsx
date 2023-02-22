import React from 'react'
import './Header.css'

const Header = () => {
  return (
<>  
<div className='Header-Flex'>
      <a className="Logo" href='/'>Travellers</a>
<div className='NavBar'>
    <div className="Links">
    <li><a href="/">Reviews</a></li>
    <li><a href='/'>People</a></li>
    <li><a href='/'>Partners</a></li>
    <li><a href='/'>Feedbacks</a></li>
    <li><a href='/'>Pricing</a></li>
    </div>
    <button>Get The App</button>
    </div>
    </div>
</>
  )
}

export default Header