import React from 'react'
import './Section4.css'
import Travel from './images/Travel.jpg' 
import Girl from './images/Girl.jpeg'
import Alexander from './images/Alexander.jpg'
import Nicolas from './images/Nicolas.jpg'
import Egypt from './images/Egypt-Women.jpeg'
import { BsPlus } from "react-icons/bs";

const Section4 = () => {
  return (
    <>
    <div className='Section-4-Flex'>
        <div className='Section-4-Text'>
    <h1>POPULAR TRAVELLERS</h1>
    <h3>Know the people you,re going to meet</h3>
    <h4>Have a quick conversation anytime you need with your fellow travellers you,re going to travel with. </h4>
    <div className='Section-4-Icon'>
    <img className='Contact' src={Girl} alt="" />
    <img className='Contact' src={Alexander} alt="" />
    <img className='Contact' src={Nicolas} alt="" />
    <img className='Contact' src={Egypt} alt="" />
    <BsPlus className='Plus'/>
    </div>
    <p>with one simple click you can know who you can have as your travel buddy.</p>
    </div>
    <div className='image'>
    <img src={Travel} alt="" />
    </div>
    </div>
    </>
  )
}

export default Section4