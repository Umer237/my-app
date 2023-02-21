import React from 'react'
import './EndFooter.css'
import { RiFacebookFill } from 'react-icons/ri';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';

const EndFooter = () => {
  return (
   <>
   <div className='End-Footer-Div'>
   <h1>Travellers</h1>
   <div className='Servies-Footer'>
   <h2>Reviews</h2>
   <h2>People</h2>
   <h2>Partners</h2>
   <h2>FeedBacks</h2>
   <h2>Pricing</h2>   
   </div>
   <div className='Icons-Footer'>
   <div className='Icon-1-Footer'>
   <RiFacebookFill/>
   </div>
   <div className='Icon-2-Footer'>
   <BsInstagram/>
   </div>
   <div className='Icon-3-Footer'>
   <BsTwitter/>
   </div>
   <div className='Icon-4-Footer'>
   <BsYoutube/>
   </div>
   </div>
   </div>
   </>
  )
}

export default EndFooter