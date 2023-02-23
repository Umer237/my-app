import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai";
import {AiOutlineStar} from "react-icons/ai";
import {AiFillStar} from "react-icons/ai";
import { RiFacebookFill } from 'react-icons/ri';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import './Footer.css'

const Footer = () => {
  return (
<>
<div className='Footer-FLex'>
    <div className='Footer-Section-1 Footer-Section'>
    <h1>Company</h1>
    <h3>Careers</h3>
    <h3>About Us</h3>
    <h3>Blog</h3>
    <h3>Press Info</h3>
    <h3>Feautures</h3>
    <h3>Successes</h3>
    </div>
    <div className='Footer-Section-2 Footer-Section'>
        <h1>Travellers</h1>
        <h3>Enterprise</h3>
        <h3>Customer Stories</h3>
        <h3>Pricing</h3>
        <h3>Security</h3>
    </div>
    <div className='Footer-Section-3 Footer-Section'>
        <h1>Resources</h1>
        <h3>Download</h3>
        <h3>Help Center</h3>
        <h3>Guides</h3>
        <h3>Events</h3>
        <h3>Developers</h3>
        <h3>App Directory</h3>
        <h3>Partners</h3>
    </div>
    <div className="Footer-Section-4 Footer-Section">
        <h1>Extras</h1>
        <h3>Podcast</h3>
         <h3>Travellers Shop</h3>
         <h3>Travellers at Work</h3>
         <h3>Travellers Fund</h3>
         <h3>Intergrations</h3>
    </div>
    <div className='Footer-Section-5'>
        <h1>Subscribe</h1>
        <input className='textbox' type="text" />
        <AiOutlineArrowRight className='Arrow'/>
        <div className='Last-Section-Div'>
        <h3>8/10<br></br>Overall Rating</h3>
        </div>
        <AiFillStar className='icon-1'/>
        <AiFillStar className='icon-1'/>
        <AiFillStar className='icon-1'/>
        <AiFillStar className='icon-1'/>
        <AiOutlineStar className='icon-2'/>
    </div>
</div>
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

export default Footer