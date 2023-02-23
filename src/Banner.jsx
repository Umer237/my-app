import React from 'react'
import Traveler from './images/Traveler.png'
import './Banner.css'

const Banner = () => {
  return (
<>
<div className='Background'>
    <div className='Banner-Things'>
        <div>
    <h1>Don,t listen to <br></br>what they say,<br></br> Go see</h1>
    <p>Your ultimate travel companion. Carries all the information you need while travelling</p>
    </div>
    <div>
    <img src={Traveler} alt="" />
    </div>
    </div>    
</div>
</>
  )
}

export default Banner