import React from 'react'
import './Section6.css'
import { BsApple } from "react-icons/bs"
import { IoLogoGooglePlaystore } from "react-icons/io5"


const Section6 = () => {
  return (
<>
<div className='Section-6-Div'>
   
<div className='Section-6-Text'>
<h1>Download the travellers community app now !</h1>
<p>Be the first one to explore one of the best travel application </p>
</div> 
<div className='Section-6-Things'>
<div className='Boxes'>
<div className='Small-Boxe-1'>
    <div className='Apple-Store'>
 <BsApple/></div>
 <div className='Icon-Text'><p>Download In the </p>
 <h2>Apple Store</h2>
 </div>
</div>
<div className='Small-Boxe-2'>
  <div className='Play-Store'>
<IoLogoGooglePlaystore/></div>
<div className='Icon-Text'><p>Download in from </p><h2>Google Play</h2>
</div>
</div>
</div>
</div>
</div>
</>
  )
}

export default Section6